<template>
  <v-app>
    <!-- Navbar layout -->
    <navbar></navbar>
    <v-parallax height="100%" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
    <v-main>
      <main-content></main-content>
    </v-main>
    </v-parallax>
    <!-- <v-footer padless>
      <v-col
        class="text-center"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>
    </v-footer> -->
  </v-app>
</template>

<script>
import Navbar from './views/layouts/Navbar.vue';
import MainContent from './views/layouts/MainContent.vue';

export default {
  name: 'App',

  components: {
    Navbar,
    MainContent,
  },

  data: () => ({
    //
  }),
};
</script>
