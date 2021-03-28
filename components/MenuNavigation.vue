<template>
  <div class="menu-navigation" :class="{ active: isMenuNavigationOpened }">
    <nav>
      <UILink2Move
          v-for="route in routes"
          :key="route.name"
          :text="route.name"
          @click.native="toPage({ route })"
      />
    </nav>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
import UILink2Move from '/components/UI/Link2Move.vue'

export default {
  name: 'MenuNavigation',
  components: {UILink2Move},
  props: {},
  computed: {
    ...mapGetters('app', ['isMenuNavigationOpened']),

    routes() {
      let navigation = [];
      this.$router.options.routes.forEach(x => {
        let splited = x.name.split('-id')
        if (splited[1] !== '') navigation.push(x)
      })
      return navigation;
    },
  },
  methods: {
    ...mapMutations('app', ['toPage']),
  },
}
</script>

<style lang="scss">
@import '../assets/styles/props.scss';

.menu-navigation {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: $zIndex-3;
  background: $color-7;
  transform: translateY(-100%);
  transition: transform 0.4s;

  &.active {
    transform: translateY(0);
  }

  & > nav {
    height: 100%;
    z-index: $zIndex-4;
    display: flex;
    flex-direction: column;
    padding: 50px;
  }
}
</style>
