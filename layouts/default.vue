<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
import * as THREE from 'three'
import WAVES from 'vanta/dist/vanta.waves.min'

export default {
  mounted() {
    this.vantaEffect = WAVES({
      el: '#vanta',
      THREE,
      mouseControls: false,
      touchControls: false,
      waveSpeed: 2,
      scale: 1.0,
      scaleMobile: 1.0,
      color: '#2a876b'
    })
    // #4060C2
  }
}
</script>

<style></style>
