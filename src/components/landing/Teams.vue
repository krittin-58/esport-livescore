<template>
<v-container>
    <v-row>
        <v-col cols="3" v-for="team in teamList" :key="team.id">
            <v-card
            class="mx-auto"
            max-width="344"
            outlined
        >
            <v-list-item two-line>
            <v-list-item-content>
                <div class="overline mb-4">
                {{ team.current_videogame.name }}
                </div>
                <v-list-item-title class="caption">
                {{ team.name }}
                </v-list-item-title>
                <v-list-item-subtitle>{{ team.location ? team.location : 'N/A'}}</v-list-item-subtitle>
            </v-list-item-content>

            <v-img :src="team.image_url ? team.image_url : `https://via.placeholder.com/100x100.png?text=${team.current_videogame.name}`" max-height="100px" max-width="100px" aspect-ratio="1"></v-img>
            </v-list-item>

            <v-card-actions>
            <v-btn
                outlined
                rounded
                text
            >
                Favorite
            </v-btn>
            </v-card-actions>
        </v-card>
        <v-overlay :value="loading">
                <v-progress-circular
                    indeterminate
                    size="64"
                ></v-progress-circular>
                </v-overlay>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="12">
            <h5 class="text-center"><router-link :to="{ path: `/teams`}">See all teams</router-link></h5>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
export default {
    name: 'Teams',
    props: ['teamList', 'loading']
}
</script>