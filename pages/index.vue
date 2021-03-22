<template>
  <div class="page-game">
    <MainGame/>
  </div>
</template>

<script>
import MainGame from '~/components/game/MainGame.vue'

export default {
  name: 'PageGame',
  components: {MainGame},

  transition: {
    name: 'fade',
    mode: ''
  },

  mounted() {
  },
  computed: {},
}
</script>

<style lang="scss">
.page-game {
  width: 100%;
  height: 100%;
  display: block !important;
}
</style>
