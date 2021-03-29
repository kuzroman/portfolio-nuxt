<template>
  <UIComeBack
      class="come-back"
      v-if="isPortfolioIDPage"
      @click.native="comeBack"
  />
</template>

<script>
import UIComeBack from '/components/UI/ComeBack.vue'

export default {
  name: 'ComeBack',
  components: {UIComeBack},

  computed: {
    isPortfolioIDPage() {
      return this.$route.name === 'portfolio-id'
    }
  },

  methods: {

    comeBack() {
      this.$router.push({path: '/portfolio'})
    }
  },
}
</script>

<style lang="scss">
@import "/assets/styles/props";

.come-back {
  position: absolute;
  top: 1.52em;
  right: 8em;
  z-index: $zIndex-2;
}
</style>