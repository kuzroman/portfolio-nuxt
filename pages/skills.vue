<template>
  <div class="skills">

    <div class="scroll-y">

      <div class="header">
        <h1>Skills</h1>
      </div>

      <p class="pt1 pb1">
        This is not full list, but most frequently used knowledge
      </p>

      <SkillsMe/>
    </div>

  </div>
</template>

<script>
import SkillsMe from "../components/SkillsMe";

export default {
  components: {SkillsMe},

  transition: {
    name: 'fade',
    mode: ''
  },

  methods: {},
  mounted() {},
  computed: {},

  head() {
    return {
      title: 'front-end developer skills',
      meta: []
    }
  },
}
</script>

<style lang="scss">
.skills {

}
</style>
