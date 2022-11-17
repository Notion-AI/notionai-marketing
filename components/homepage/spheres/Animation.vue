<template>
  <canvas ref="canvas" />
</template>

<script>
/**
 * Spheres Animation Component
 * @author Kevin Levron <kevin.levron@gmail.com>
 */
import { PerspectiveCamera, Scene, Vector2, WebGLRenderer } from 'three'

import useSpheresAnimation from './animation.js'
import usePointer from '~/utils/pointer.js'

export default {
  props: {
    progress: {
      type: Number,
      default: 0
    }
  },
  mounted () {
    this.init()

    this.raf = true
    this.animate()
  },
  beforeDestroy () {
    this.raf = false
    window.removeEventListener('resize', this.resize)
  },
  methods: {
    init () {
      this.renderer = new WebGLRenderer({
        canvas: this.$refs.canvas,
        powerPreference: 'high-performance',
        antialias: true
      })

      this.camera = new PerspectiveCamera(25)
      this.camera.position.set(0, 0, 200)

      this.resize()
      window.addEventListener('resize', this.resize)

      this.mouse = new Vector2()
      this.pointer = usePointer({ domElement: this.renderer.domElement })

      this.initScene()
    },
    initScene () {
      this.scene = new Scene()
      this.animation = useSpheresAnimation({ scene: this.scene })
    },
    animate () {
      this.animation.update({ progress: this.progress })

      this.mouse.lerp(this.pointer.nPosition, 0.05)
      this.scene.rotation.x = this.mouse.y * 0.05
      this.scene.rotation.y = -this.mouse.x * 0.05

      this.renderer.render(this.scene, this.camera)
      if (this.raf) { requestAnimationFrame(this.animate) }
    },
    resize () {
      this.width = window.innerWidth
      this.height = window.innerHeight
      this.renderer.setSize(this.width, this.height)
      this.camera.aspect = this.width / this.height
      this.camera.updateProjectionMatrix()
    }
  }
}
</script>

<style lang="scss" scoped>
canvas {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
</style>
