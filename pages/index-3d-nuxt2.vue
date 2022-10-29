<!-- https://github.com/BekBoris/NuxtJS-ThreeJS/blob/master/pages/index.vue -->
<template>
  <div ref="container" id="container"></div>
</template>

<script>
  import * as THREE from "three"

  export default {
    data: function() {
      return {
        camera: null,
        scene: null,
        renderer: null,
      }
    },

    components: {
    },

    mounted() {
      const container = this.$refs.container

this.camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      )
      this.camera.position.set(0, 2, 2)
      this.camera.position.z = 5

      this.scene = new THREE.Scene()
      this.light = new THREE.AmbientLight(0xffffff, 5.3)
      this.scene.add(this.light)

      this.renderer = new THREE.WebGLRenderer({ antialias: true })
      this.renderer.setClearColor("#000000")
      this.renderer.setSize(window.innerWidth, window.innerHeight)

      container.appendChild(this.renderer.domElement)

      const size = 10
      const divisions = 25
      this.gridHelper = new THREE.GridHelper(size, divisions)
      this.scene.add(this.gridHelper)

      const geometry = new THREE.BoxGeometry( 1, 1, 1 )
      const material = new THREE.MeshBasicMaterial( { color: 0xff0000 } )
      const cube = new THREE.Mesh( geometry, material )
      this.scene.add( cube )

      this.animate()
    },

    methods: {
      animate: function() {
        requestAnimationFrame(this.animate)
        this.renderer.render(this.scene, this.camera)
      }
    }
  }
</script>
