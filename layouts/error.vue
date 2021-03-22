<template>
  <div class="not-found">
    <h1 v-if="error.statusCode === 404">404 ~ Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <NuxtLink to="/">Dude. Go to Home!</NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'Page404',
  props: ['error'],
  layout: '404' // layouts/default.vue by default!
}
</script>

<style lang="scss">
@import '/assets/styles/props.scss';

.not-found {
  text-align: center;
  color: $color-10;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  a {
    font-size: 2em;
    color: $color-12;
    text-decoration: none;
  }
}
</style>