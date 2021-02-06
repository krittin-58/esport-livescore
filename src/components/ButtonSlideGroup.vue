<template>
  <v-sheet
    id="slide-display-game"
    class="mx-auto"
    max-width="90%"
  >
    <v-slide-group
      multiple
      show-arrows
      active-class="success"
    >
      <v-slide-item
        v-for="game in games"
        :key="game.name"
        v-slot="{ active, toggle }"
      >
        <v-btn
          class="mx-2"
          :input-value="active"
          active-class="purple white--text"
          @click="toggle"
        >
         {{ game.name }}
        </v-btn>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
export default {
    data() {
        return {}
    },
    props: ['games']
}
</script>

<style>
#slide-display-game {
    background: transparent;
}

</style>