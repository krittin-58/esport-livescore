<template>
<v-container>
    <v-row>
        <v-col md="3" cols="3" v-for="team in teamList" :key="team.id">
        <v-card
            class="mx-auto"
            max-width="344"
            shaped
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
                class="ma-2"
                text
                icon
                color="blue lighten-2"
                @click="upVote"
            >
            <v-badge
                :content="score_vote.upVote"
                :value="score_vote.upVote"
                color="green"
                
            >
                <v-icon>mdi-thumb-up</v-icon>
            </v-badge>
            </v-btn>
            <v-btn
                class="ma-2"
                text
                icon
                color="red lighten-2"
                @click="downVote"
            >
            <v-badge
                :content="score_vote.downVote"
                :value="score_vote.downVote"
                color="red lighten-2"
                
            >
                <v-icon>mdi-thumb-down</v-icon>
            </v-badge>
            </v-btn>
            <v-list-item-subtitle class="text-right">
                <v-icon>mdi-update</v-icon>
                {{ team.modified_at | moment }}
            </v-list-item-subtitle>
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
import moment from 'moment';

export default {
    name: 'Teams',
    props: ['teamList', 'loading'],
    data() {
        return {
            score_vote: {
                upVote: 0,
                downVote: 0
            },
            show: false,
        }
    },

    filters: {
        moment: function (date) {
            return moment(date).startOf('day').fromNow();
        }
    },

    methods: {
        upVote(team_id) {
            if (team_id == team_id) {
                this.score_vote.upVote += 1;
            }
        },

        downVote(team_id) {
            if (team_id == team_id) {
                this.score_vote.downVote += 1;
            }
        },
    }
}
</script>