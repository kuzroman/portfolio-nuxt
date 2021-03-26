<template>
  <div class="works">

    <div class="header">
      <h1>Works</h1>
    </div>

    <div class="scroll-y">

      <p class="pt1 pb1">
        This is not full list, but most frequently used knowledge
      </p>

    </div>

  </div>
</template>

<script>


export default {
  name: 'PageWorks',

  transition: {
    name: 'fade',
    mode: ''
  },

  head() {
    return {
      title: 'front-end developer skills',
      meta: []
    }
  },
}
</script>

<style lang="scss">
.works {

}
</style>
