<template>
    <v-parallax height="100%" src="https://cdn.shopify.com/s/files/1/0070/6661/5861/files/Featured_product_backgroud_image_1800x.jpg?v=1552502823">
    <v-container fluid>
        <router-view></router-view>
    </v-container>
    </v-parallax>
</template>

<script>
export default {
    name: 'Main-layout'
}
</script>