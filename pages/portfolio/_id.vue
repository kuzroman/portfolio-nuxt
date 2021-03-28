<template>
  <div class="portfolio-id">

    <div class="scroll-y">

      <div class="header">
        <h1>{{ work.nameCompany}} - {{ work.nameTitle }}</h1>
      </div>

      <v-app id="inspire">
        <v-carousel height="510" hide-delimiter-background show-arrows-on-hover>
          <v-carousel-item v-for="(image, i) in images" :key="i">
            <v-sheet height="100%">
              <v-row class="fill-height" align="center" justify="center">
                <img :src="image.src" alt="">
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-app>

      <div
          class="desc"
          v-html="work.descDeal"
      />

    </div>

  </div>
</template>

<script>
export default {

  // vuetify: new Vuetify(),
  data() {
    return {
      works: require('/db/works.js'),
    }
  },

  computed: {

    work() {
      return this.works[this.$route.params.id];
    },
    projectName() {
      return this.work.name
    },
    images() {
      return [...Array(this.work.numberImg)].map((x, i) => ({
        src: require(`/assets/img/portfolio/gallery/${this.projectName}/${i+1}.jpg`)
      }))

    },
  },

  methods: {},

  transition: {
    name: 'fade',
    mode: ''
  },

  head() {
    return {
      title: 'front-end developer portfolio description',
      meta: []
    }
  },
}
</script>

<style lang="scss">
@import "/assets/styles/props";

.portfolio-id {

  .row {
    margin: 0;
  }
  .theme--light.v-application{
    max-width: fit-content;
    margin: 0 auto;
  }
  .v-application--wrap {
    min-height: auto;
  }

  .header {
    max-width: 840px;
    margin: 2em auto;
  }

  .desc {
    max-width: 840px;
    margin: 3em auto;
  }

  a {
    color: $color-12;
    line-height: 2em;

    &:hover {
      color: lighten($color-12, 10%);
    }
  }

}
</style>
