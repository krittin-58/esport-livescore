<template>
    <v-overlay :value="loading">
        <v-progress-circular
        indeterminate
        size="64"
      ></v-progress-circular>
    </v-overlay>
</template>

<script>
export default {
    name: 'loading-component',
    props: ['loading']
}
</script>