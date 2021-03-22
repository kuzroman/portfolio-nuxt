<template>
  <div class="skills">
    <h1>Skills</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur cum
      eius eligendi eos id magni, obcaecati optio qui, sapiente sint sunt
      tenetur vel voluptates? Aperiam distinctio esse eveniet explicabo
      veritatis?
    </p>
    <LeaderBoard />
  </div>
</template>

<script>
import LeaderBoard from '~/components/game/LeaderBoard.vue'

export default {
  name: 'PageSkills',
  components: { LeaderBoard },

  transition: {
    name: 'fade',
    mode: ''
  },

  data() {
    return {
      mountains: ''
    }
  },

  mounted() {},
  computed: {},
}
</script>

<style lang="scss">
.skills {
  width: 100%;
  height: 100%;
  //background: #42b983;
}
</style>
