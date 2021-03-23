<template>
  <div class="leader-board" :class="state">
    <h2 class="title">Leader Board</h2>

    <DashedList>
      <div class="result" v-for="(leader, i) in getTop10" :key="i">
        <div>
          <span>{{ i + 1 }}st.</span>
          <span>{{ leader.user }}</span>
        </div>
        <div>{{ leader.score }} points</div>
      </div>
    </DashedList>

    <div class="your-score" v-if="!isSent">
      <label>
        <span>Your name</span>
        <input
            type="text"
            placeholder="Short name, or emotion <3"
            maxlength="40"
            v-model="inputText"
            @keypress.enter="saveResult"
        />
        <span>{{ score }} points</span>
      </label>
      <UIButton
          class="save-result"
          text="Save on board"
          @click.native="saveResult"
      />
    </div>

    <CloseSpinner @click.native="closeLeaderBoard"/>
  </div>
</template>

<script>
import {mapActions, mapMutations, mapGetters} from 'vuex'
import DashedList from '/components/UI/DashedList.vue'
import CloseSpinner from '/components/UI/CloseSpinner.vue'
import UIButton from '/components/UI/Button.vue'

export default {
  name: 'LeaderBoard',
  components: {DashedList, CloseSpinner, UIButton},

  data() {
    return {
      isDebug: true,
      inputText: '',
    }
  },
  watch: {
    inputText(text) {
      this.inputText = text.replace(/[^a-z 0-9]|^\s/gi, '').replace(/\s\s/gi, ' ')
    },
  },
  computed: {
    ...mapGetters('leaderBoard', ['leaders', 'getSortLeaders', 'isSent']),
    ...mapGetters('game', ['isLeaderBoardOpened', 'score']),

    getTop10() {
      return this.getSortLeaders.slice(0, 10)
    },

    state() {
      return this.isLeaderBoardOpened || this.isDebug ? 'active' : 'hide'
    }
  },
  methods: {
    ...mapActions('leaderBoard', ['getLeaders', 'addLeader']),
    ...mapMutations('game', ['setIsLeaderBoardOpened']),

    saveResult() {
      const text = this.inputText.replace(/[^a-z 0-9]/gi, '')
      if (!text.trim()) return

      this.addLeader({user: text, score: this.score})
        .then(this.getLeaders)
    },

    closeLeaderBoard() {
      this.setIsLeaderBoardOpened(false)
    },
  },
  mounted() {
    this.getLeaders()
  },
}
</script>

<style lang="scss">
@import '../../assets/styles/props';

.leader-board {
  width: 100%;
  height: 100%;
  background: $color-8;
  position: relative;
  transform: translateY(-110%);
  opacity: 0;
  transition: opacity 0.3s, transform 0.3s;
  z-index: $zIndex-4;

  &.active {
    transform: translateY(0);
    opacity: 1;
  }

  &.hide {
    transform: translateY(110%);
    opacity: 0;
  }

  .title {
    font-size: 2em;
    text-align: center;
    padding: 2em;
  }

  .dashed-list {
    background-color: $color-6;
    padding: 2em;
    width: 80%;
    max-width: 800px;
    margin: 0 auto;

    .result {
      span:first-child {
        width: 3em;
        color: $color-12;
        display: inline-block;
        text-align: right;
      }
    }

    @media (max-width: $mq-phone) {
      width: 100%;
      padding: 1em;
    }
  }

  .your-score {
    text-align: center;
    color: $color-12;
    margin: 5em auto;
    font-weight: bold;
    display: block;

    input {
      min-width: 16em;
      margin: 0 2em;
      outline: none;
      padding: 6px 8px;
      border-radius: 3px;
      border: none;
      box-shadow: 0 4px 10px 2px #000;
      font-size: 1.2em;
    }

    @media (max-width: $mq-phone) {
      margin-top: 2em;

      > span {
        display: block;
        margin: 1em 0;
      }
    }
  }

  .save-result {
    display: block;
    max-width: 12em;
    margin: 3em auto;
  }

  .close-spinner {
    width: 5em;
    height: 5em;
    top: 3em;
    right: 2em;
  }
}
</style>
