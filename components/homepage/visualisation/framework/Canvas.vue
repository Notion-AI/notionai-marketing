<template>
  <div class="relative w-full h-full overflow-hidden">
    <div class="w-full h-full">
      <canvas ref={{ canvasRef }} class="block" />
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      // camera: {

      // },

      canvasRef: {
        type: String,
        default: 'container'
      },

      // shadows: {

      // }
    },

    mounted () {
      console.log('Mounted')
    }
  }
</script>
