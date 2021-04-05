<template>
  <UIIconBurger class="icon-burger" @click.native="switchMenu" />
</template>

<script>
import UIIconBurger from './UI/IconBurger.vue'
import { mapMutations, mapGetters } from 'vuex'

export default {
  name: 'iconBurger',
  components: { UIIconBurger },
  props: {},
  data() {
    return {}
  },
  computed: {
    ...mapGetters('app', ['isMenuNavigationOpened']),
  },
  methods: {
    ...mapMutations('app', ['setIsMenuNavigation']),

    switchMenu() {
      this.setIsMenuNavigation(!this.isMenuNavigationOpened)
    },
  },
}
</script>

<style lang="scss">
@import '../assets/styles/props.scss';

.icon-burger {
  position: fixed;
  top: 1.2em;
  right: 2em;
  z-index: $zIndex-3;
}

@media (max-width: $mq-phone) {
  .icon-burger {
    top: .5em;
    right: .7em;
  }
}
</style>
