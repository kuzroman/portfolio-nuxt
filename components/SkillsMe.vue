<template>
  <div class="skills-me">

    <div class="knowledge" v-for="(skills, key) in knowledge" :key="key">
      <div class="main">{{ key }}</div>
      <div class="general">
        <div v-for="skill in skills" :key="skill">{{ skill }}</div>
      </div>
    </div>

  </div>
</template>

<script>
export default {

  data() {
    return {
      knowledge: require('/db/skills.json')
    }
  },
}
</script>

<style lang="scss">
@import "/assets/styles/props.scss";

.skills-me {

  .knowledge {
    color: $color-12;
    background: $color-1;
    margin: 2.5em 0;
    display: flex;
    justify-content: space-between;
    box-shadow: 0 3px 9px 0 #000000c9;
    transition: color .3s, background .3s;

    &:hover {
      color: lighten($color-12,10%);
      background: lighten($color-1, 5%);
    }

    .main {
      padding: .8em;
      font-weight: bold;
    }

    .general {
      padding: .8em;

      > div {
        display: inline-block;
        padding: 0 .4em;
      }
    }
  }
}
</style>