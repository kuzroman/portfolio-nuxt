<template>
  <div class="page-game">
    <MainGame/>
  </div>
</template>

<router>{ name: 'game' }</router>

<script>
import MainGame from '~/components/game/MainGame.vue'

export default {
  components: {MainGame},

  data() {
    return {
      pageTitle: 'front-end developer game',
    }
  },

  transition: {
    name: 'fade',
    mode: ''
  },

  head() {
    return {
      title: this.pageTitle,
      meta: []
    }
  },

}
</script>

<style lang="scss">
.page-game {
  display: block !important;
}
</style>
