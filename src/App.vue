<template>
  <v-app>
    <!-- Navbar layout -->
    <navbar></navbar>
    <v-parallax height="100%" src="https://cdn.shopify.com/s/files/1/0070/6661/5861/files/Featured_product_backgroud_image_1800x.jpg?v=1552502823">
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
