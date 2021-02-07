<template>
    <div>
        <v-row>
            <v-overlay :value="loading">
                <v-progress-circular
                    indeterminate
                    size="64"
                ></v-progress-circular>
                </v-overlay>
            <v-col md="3" v-for="item in leagues" :key="item.id">
                <v-card
                    class="mx-auto"
                    max-width="400"
                >
                    <v-img
                    class="white--text align-end"
                    max-height="400"
                    max-width="400"
                    contain
                    aspect-ratio="1"
                    :src="item.image_url ? item.image_url : `https://via.placeholder.com/150x150.png?text=${item.videogame.name}`"
                    :lazy-src="item.image_url"
                    >
                    
                    </v-img>
                    <v-card-title><h4>{{ item.name }}</h4></v-card-title>
                    <v-card-subtitle class="pb-0">
                    {{ item.videogame.name }}
                    </v-card-subtitle>

                    <v-card-text class="text--primary">
                    <div>{{ item.modified_at }}</div>

                    <div>Event: {{ item.series.length }}</div>
                    </v-card-text>

                    <v-card-actions>
                    <v-btn
                        color="orange"
                        text
                        :to="{ path: `/leagues/${item.id}`}"
                    >
                        Read more!
                    </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </div>
    
</template>

<script>
import PandascoreAPI from '@/config/api';

export default {
    name: 'Browser-Leagues',
    data() {
        return {
            leagues: [],
            loading: true
        }
    },

    mounted() {
        this.getLeagues();
    },

    methods: {
        getLeagues() {
            try {
                PandascoreAPI.getListLeagues().then((data) => {
                    if (data !== null)
                    this.leagues = data
                    this.loading = false
                });
            } catch (error) {
                console.log(error);
            }
            
        }
    }
}
</script>