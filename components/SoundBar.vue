<template>
  <UiSoundBar
    class="sound-bar"
    :isActive="isActive"
    :class="stateClass"
    @click.native="switchPlayPause"
  />
</template>

<script>
import UiSoundBar from './UI/SoundBar.vue'
import backgroundMusic from '../assets/media/backgroundSite.mp3'
import CustomAudio from './abstractions/Audio'
import {mapGetters} from "vuex";
let audioBG

export default {
  name: 'SoundBar',
  components: { UiSoundBar },

  data() {
    return {
      isActive: false,
    }
  },

  watch: {
    isGameReady(isTrue) {
      isTrue && this.stop()
    }
  },

  computed: {
    ...mapGetters('game', ['isGameReady']),

    stateClass() {
      return this.isGameReady ? 'hide' : ''
    },
  },

  methods: {
    switchPlayPause() {
      audioBG.isPlaying() ? this.stop() : this.play()
    },

    play() {
      audioBG.play()
      this.isActive = true
    },

    stop() {
      audioBG.pause()
      this.isActive = false
    }
  },

  mounted() {
    audioBG = new CustomAudio(backgroundMusic, 1,true)
  },

  destroyed() {
    audioBG.destroy()
  },
}
</script>

<style lang="scss">
@import "/assets/styles/props";

.sound-bar {
  position: absolute;
  top: 1.6em;
  left: 2em;
  transform: translateY(0);
  transition: transform .3s;
  z-index: $zIndex-2;

  &.hide {
    transform: translateY(-10em);
  }

  @media (max-width: $mq-phone) {
    top: .8em;
    left: 1em;
  }
}
</style>
