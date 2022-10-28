<template>
<!-- https://stackoverflow.com/questions/70246314/nuxt3-threejstroisjs-deployment-on-vercel-es-module-error -->
  <client-only>
    <Renderer ref="renderer">
      <Camera :position="{ z: 100 }"></Camera>
      <LambertMaterial id="material"></LambertMaterial>
      <Scene>
        <PointLight :position="{ y: 50, z: 50 }"></PointLight>
        <Box ref="box" :size="10" :rotation="{ y: Math.PI / 4, z: Math.PI / 4 }" material="material"></Box>
      </Scene>
    </Renderer>
  </client-only>
</template>

<script>
  import { Renderer, Scene, Camera, Sphere } from 'troisjs'

  export default {
    components: {
      Renderer,
      Scene,
      Camera,
      Sphere
    },

    mounted() {
      console.log("this.$refs")
      console.log(this.$refs)
      const renderer = this.$refs.renderer;
      console.log("renderer")
      console.log(renderer)
      // const box = this.$refs.box.mesh;

      // renderer.onBeforeRender(() => {
      //   box.rotation.x += 0.01;
      // });
    },
  };
</script>
