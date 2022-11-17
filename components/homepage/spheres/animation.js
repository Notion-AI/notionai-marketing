/**
 * Spheres Animation
 * @author Kevin Levron <kevin.levron@gmail.com>
 */
import {
  Clock,
  Color,
  Euler,
  InstancedMesh,
  MathUtils,
  MeshBasicMaterial,
  Object3D,
  SphereGeometry,
  Vector2,
  Vector3
} from 'three'

import { psrdnoise3 } from './psrdnoise.glsl.js'

const { randInt: rndI, randFloatSpread: rndFS } = MathUtils

export default function (params) {
  const config = {
    count: 1024,
    color: new Color(0x808080),
    color1: new Color(0xFFF579),
    color2: new Color(0xCAB5CC),
    color3: new Color(0xAAA2D4),
    noiseCoordScale: 0.217,
    noiseStrength: 0.38,
    noiseTimeScale: 1,
    noiseStrengths: [0.1, 0.38, 0.1, 0.38, 0.1, 0.1, 0.1, 0.1],
    // noiseCoordScales: [0, 0.217, 0, 0.217, 0, 0, 0, 0],
    ...params
  }

  config.tCount = config.count * 3

  const progress = { current: 0, target: 0 }

  const positions = []
  const delays = new Array(config.tCount).fill().map(() => Math.random())
  const progresses = new Array(config.tCount).fill(0)

  let iMesh
  const iMeshPosition = new Vector3()
  const iMeshRotation = new Euler()

  const uTime = { value: 0 }
  const uProgress = { value: 0 }
  const uNoiseCoordScale = { value: config.noiseCoordScale }
  const uNoiseStrength = { value: config.noiseStrength }

  const clock = new Clock()

  const dummyO = new Object3D()
  const dummyV = new Vector3()

  initScene()

  return { iMesh, update }

  /**
   * Init scene and points
   */
  function initScene () {
    config.scene.background = new Color(0x24142A)

    const spherePoints = getFibonacciSpherePoints(config.tCount, 30, true)

    let stepIndex = 0

    // step 0 - random
    positions[stepIndex] = new Array(config.tCount)
    for (let i = 0; i < config.tCount; i++) {
      positions[stepIndex][i] = new Vector3(rndFS(200), rndFS(200), rndFS(200))
    }
    stepIndex++

    // step 1 - big sphere
    positions[stepIndex] = new Array(config.tCount)
    for (let i = 0; i < config.tCount; i++) {
      positions[stepIndex][i] = spherePoints[i]
    }
    stepIndex++

    // step 2 to 4
    positions[stepIndex] = new Array(config.tCount)
    positions[stepIndex + 1] = new Array(config.tCount)
    positions[stepIndex + 2] = positions[stepIndex - 1]
    for (let i = 0; i < config.count; i++) {
      const j = i * 3

      // step 2 - 3 spheres from step 1 positions
      positions[stepIndex][j] = positions[1][j].clone()
      positions[stepIndex][j + 1] = positions[1][j + 1].clone().multiplyScalar(0.8)
      positions[stepIndex][j + 2] = positions[1][j + 2].clone().multiplyScalar(0.6)

      // step 3 - 3 separated spheres
      positions[stepIndex + 1][j] = positions[1][j].clone().multiplyScalar(0.7).add(dummyV.set(0, 0, 75))
      positions[stepIndex + 1][j + 1] = positions[1][j + 1].clone().multiplyScalar(0.7)
      positions[stepIndex + 1][j + 2] = positions[1][j + 2].clone().multiplyScalar(0.7).add(dummyV.set(0, 0, -75))
    }
    stepIndex += 3

    // step 5 - ring
    let nearest = 0
    let nearestDist = 99
    const center = new Vector2()
    positions[stepIndex] = new Array(config.tCount)
    for (let i = 0; i < config.tCount; i++) {
      const pos = positions[stepIndex - 1][i].clone()
      const pos2 = new Vector2(pos.x, pos.y)
      const dist = pos2.distanceTo(center)
      if (dist < nearestDist) {
        nearest = i
        nearestDist = dist
      }
      pos2.normalize().multiplyScalar(30 + rndFS(10))
      pos.set(pos2.x, pos2.y, rndFS(10))
      positions[stepIndex][i] = pos
    }
    positions[stepIndex][nearest] = new Vector3()
    stepIndex++

    // step 6 - sphere and ring
    positions[stepIndex] = new Array(config.tCount)
    for (let i = 0; i < config.count; i++) {
      const j = i * 3
      positions[stepIndex][j] = positions[stepIndex - 1][j]
      positions[stepIndex][j + 1] = positions[stepIndex - 1][j + 1]
      positions[stepIndex][j + 2] = positions[2][j + 2].clone().multiplyScalar(0.6)
    }
    stepIndex++

    // step 7
    const gridX = 20
    const gridWith = 30
    const colsX = new Array(gridX)
    const colsY = new Array(gridX)
    const x0 = -gridWith / 2
    const y0 = -50
    const dx = gridWith / (gridX - 2)
    for (let i = 0; i < gridX; i++) {
      colsX[i] = x0 + i * dx
      colsY[i] = y0 + rndI(1, 20)
    }
    positions[stepIndex] = new Array(config.tCount)
    for (let i = 0; i < config.tCount; i++) {
      const pos = positions[stepIndex - 1][i].clone()

      const col = rndI(0, gridX - 1)
      pos.x = colsX[col]
      pos.y = colsY[col]
      pos.z = 0
      colsY[col] += rndI(1, 3)

      positions[stepIndex][i] = pos
    }
    stepIndex++

    const geometry = new SphereGeometry(0.4, 16, 16)

    const material = new MeshBasicMaterial({
      transparent: true,
      opacity: 1,
      onBeforeCompile (shader) {
        shader.uniforms.uTime = uTime
        shader.uniforms.uProgress = uProgress
        shader.uniforms.uNoiseCoordScale = uNoiseCoordScale
        shader.uniforms.uNoiseStrength = uNoiseStrength
        shader.vertexShader = `
          uniform float uTime;
          uniform float uProgress;
          uniform float uNoiseCoordScale;
          uniform float uNoiseStrength;
          ${psrdnoise3}
        ` + shader.vertexShader
        shader.vertexShader = shader.vertexShader.replace(
          '#include <project_vertex>',
          `
            vec4 mvPosition = vec4( transformed, 1.0 );

            vec3 iPos = vec3(instanceMatrix[3][0], instanceMatrix[3][1], instanceMatrix[3][2]);

            vec3 grad;
            vec3 p = vec3(0.0);
            float n = psrdnoise(iPos * uNoiseCoordScale, p, uTime, grad);
            iPos += grad * uNoiseStrength;

            mat4 iMatrix = instanceMatrix;
            iMatrix[3][0] = iPos.x;
            iMatrix[3][1] = iPos.y;
            iMatrix[3][2] = iPos.z;
            mvPosition = modelViewMatrix * iMatrix * mvPosition;
            gl_Position = projectionMatrix * mvPosition;
          `
        )
      }
    })

    iMesh = new InstancedMesh(geometry, material, config.tCount)

    for (let i = 0; i < config.tCount; i++) {
      iMesh.setColorAt(i, config.color)
    }

    config.scene.add(iMesh)
  }

  /**
   * Animation loop
   */
  function update ({ progress: p }) {
    uTime.value += clock.getDelta() * config.noiseTimeScale

    progress.target = p * 8
    progress.current += (progress.target - progress.current) * 0.05
    uProgress.value = progress.current

    const pMod = progress.current % 1

    // instances progress
    for (let i = 0; i < config.tCount; i++) {
      progresses[i] = Math.min(1, pMod * (1 + delays[i] * 2))
    }

    let scale = 1
    iMeshPosition.set(0, 0, 0)
    iMeshRotation.set(0, Math.PI, 0)
    if (progress.current > 7) {
      scale = 0.75
      iMeshPosition.y = -50 - pMod * 200
    } else if (progress.current > 6) {
      scale = 1 - 0.25 * pMod
      iMeshPosition.y = pMod * -50
    } else if (progress.current > 5) {
      scale = 1.8 - 0.8 * pMod

      for (let i = 0; i < config.count; i++) {
        const j = i * 3
        iMesh.setColorAt(j, config.color1.clone().lerp(config.color2, pMod))
        iMesh.setColorAt(j + 1, config.color1.clone().lerp(config.color3, pMod))
        iMesh.setColorAt(j + 2, config.color1)
      }
      iMesh.instanceColor.needsUpdate = true
    } else if (progress.current > 4) {
      scale = 1 + 0.8 * pMod
    } else if (progress.current > 3) {
      iMeshRotation.y = Math.PI / 2 * (1 + pMod)

      for (let i = 0; i < config.count; i++) {
        const j = i * 3
        iMesh.setColorAt(j, config.color1.clone().lerp(config.color1, pMod))
        iMesh.setColorAt(j + 1, config.color3.clone().lerp(config.color1, pMod))
        iMesh.setColorAt(j + 2, config.color2.clone().lerp(config.color1, pMod))
      }
      iMesh.instanceColor.needsUpdate = true
    } else if (progress.current > 2) {
      iMeshRotation.y = Math.PI / 2 * pMod
    } else if (progress.current > 1) {
      iMeshRotation.y = 0
      for (let i = 0; i < config.count; i++) {
        const j = i * 3
        iMesh.setColorAt(j, config.color.clone().lerp(config.color1, progresses[j]))
        iMesh.setColorAt(j + 1, config.color.clone().lerp(config.color3, progresses[j + 1]))
        iMesh.setColorAt(j + 2, config.color.clone().lerp(config.color2, progresses[j + 2]))
      }
      iMesh.instanceColor.needsUpdate = true
    } else {
      iMeshRotation.x = Math.PI * 0.5 * (1 - pMod)
      iMeshRotation.y = Math.PI * 0.5 * (1 - pMod)
    }
    iMesh.scale.set(scale, scale, scale)
    iMesh.position.copy(iMeshPosition)
    iMesh.rotation.copy(iMeshRotation)

    const spi = Math.floor(progress.current)
    if (spi <= positions.length - 2) {
      const startPositions = positions[spi]
      const endPositions = positions[spi + 1]
      uNoiseStrength.value = config.noiseStrengths[spi] + (config.noiseStrengths[spi + 1] - config.noiseStrengths[spi]) * pMod
      // uNoiseCoordScale.value = config.noiseCoordScales[spi] + (config.noiseCoordScales[spi + 1] - config.noiseCoordScales[spi]) * pMod
      for (let i = 0; i < config.tCount; i++) {
        dummyO.position.copy(startPositions[i]).lerp(endPositions[i], progresses[i])
        dummyO.updateMatrix()
        iMesh.setMatrixAt(i, dummyO.matrix)
      }
      iMesh.instanceMatrix.needsUpdate = true
    }
  }
}

function getFibonacciSpherePoints (samples, radius, randomize) {
  samples = samples || 1
  radius = radius || 1
  randomize = randomize || true
  let random = 1
  if (randomize) {
    random = Math.random() * samples
  }
  const points = []
  const offset = 2 / samples
  const increment = Math.PI * (3 - Math.sqrt(5))
  for (let i = 0; i < samples; i++) {
    let y = ((i * offset) - 1) + (offset / 2)
    const distance = Math.sqrt(1 - Math.pow(y, 2))
    const phi = ((i + random) % samples) * increment
    let x = Math.cos(phi) * distance
    let z = Math.sin(phi) * distance
    x = x * radius
    y = y * radius
    z = z * radius
    const point = new Vector3(x, y, z)
    points.push(point)
  }
  return points
}

// function shuffleArray (array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]]
//   }
// }
