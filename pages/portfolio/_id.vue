<template>
  <div class="portfolio-id">

    <div class="scroll-y">

      <div class="header">
        <h1 class="h1">{{ work.nameCompany}}</h1>
        <div v-if="work.nameTitle">{{ work.nameTitle }}</div>
        <div v-if="work.descCompany">{{work.descCompany}}</div>
      </div>

      <v-app class="carousel">
        <v-carousel height="auto" hide-delimiter-background show-arrows-on-hover>
          <v-carousel-item v-for="(image, i) in images" :key="i">
            <v-sheet height="100%">
              <v-row class="fill-height" align="center" justify="center">
                <img :src="image.src" alt="">
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-app>

      <div class="description">

        <div v-if="work.link" class="link">
          <a :href="work.link" target="_blank">Watch project</a>
        </div>

        <div
            class="desc"
            v-html="work.descDeal"
        />

        <div class="skills">
          <div class="skill" v-for="skill in work.skills">{{ skill }}</div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import UILink2Move from '~/components/UI/Link2Move.vue'

export default {
  components: {UILink2Move},

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
      return this.work.imageDirectory
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
  line-height: 2;

  .row {
    margin: 0;
  }
  .theme--light.v-application{
    max-width: fit-content;
    margin: 1em auto 2em;
  }
  .v-application--wrap {
    min-height: auto;
  }

  .header {
    max-width: $maxWidth1;
    margin: 2em auto;
  }

  .desc {
    max-width: $maxWidth1;
    margin: 0 auto 3em;
  }

  a {
    color: $color-12;
    line-height: 2em;

    &:hover {
      color: lighten($color-12, 10%);
    }
  }

  .description {
    max-width: $maxWidth1;
    margin: 0 auto;

    .link {
      margin: 1em 0;
      font-size: 20px;
      font-weight: bold;
      text-decoration: none;
    }

    .skills {

      display: flex;
      flex-wrap: wrap;

      .skill {
        margin: 10px;
        padding: 4px 6px;
        background: $color-7;
      }
    }
  }



}
</style>
