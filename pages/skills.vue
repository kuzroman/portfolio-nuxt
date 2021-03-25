<template>
  <div class="skills">

    <div class="header">
      <h1>Front-end skills</h1>
    </div>

    <div class="scroll-y">
      <SkillsMe/>
    </div>

  </div>
</template>

<script>
import SkillsMe from "../components/SkillsMe";

export default {
  name: 'PageSkills',
  components: {SkillsMe},

  transition: {
    name: 'fade',
    mode: ''
  },

  data() {
    return {}
  },

  methods: {},
  mounted() {},
  computed: {},
}
</script>

<style lang="scss">

.scroll-y {
  overflow-y: scroll;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
}
.scroll-y::-webkit-scrollbar { /* WebKit */
  width: 0;
  height: 0;
}

.skills {
  width: 100%;
  height: 100%;

  .header {
    margin: 2em 0 0;
  }
}
</style>
