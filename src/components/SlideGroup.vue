<template>
    <div>
        <v-slide-group
            v-model="model"
            class="pa-4"
            center-active
            show-arrows
            >
            <v-slide-item
                v-for="game in games"
                :key="game.name"
                v-slot="{ active, toggle }"
            >
                <v-card
                :color="active ? 'primary' : 'grey lighten-1'"
                class="ma-4"
                height="400"
                width="400"
                @click="toggle"
                >
                <v-img
                    :src="game.imageUrl"
                    height="400px"
                    ></v-img>
                <v-row
                    class="fill-height"
                    align="center"
                    justify="center"
                >
                    <v-scale-transition>
                    <v-icon
                        v-if="active"
                        color="white"
                        size="48"
                        v-text="'mdi-close-circle-outline'"
                    ></v-icon>
                    </v-scale-transition>
                </v-row>
                </v-card>
            </v-slide-item>
            </v-slide-group>
    </div>
</template>

<script>
export default {
    props: ['games'],
}
</script>