<template>
    <v-row>
        <v-col>
            <v-img
                :src="leagueDetails.image_url ? leagueDetails.image_url : `https://via.placeholder.com/100x100.png?text=${leagueDetails.videogame.name}`" aspect-ratio="1"
                height="300px"
                contain
                ></v-img><br>
            <v-card
                class="mx-auto"
                elevation="2"
            >
                <v-row>
                    <v-col md="3">
                        <v-card-title>
                            Name: {{ leagueDetails.name }} : ({{ leagueDetails.videogame.name }})
                        </v-card-title>

                        <v-card-subtitle>
                            Game version: {{ leagueDetails.videogame.current_version ? leagueDetails.videogame.current_version : 'N/A' }}
                        </v-card-subtitle>
                    </v-col>
                    <!-- TotalMatches component -->
                    <total-matches
                        :matches="totalMatches"
                        :upcoming="totalMatchesUpComing"
                        :running="totalMatchesRunning"
                        :past="totalMatchesPast"></total-matches>
                    <!-- TotalTeams component -->
                    <!-- TotalPlayers component -->
                </v-row>
            </v-card><br>
            <v-divider></v-divider>
            <v-row>
                <v-col md="4" v-for="serie in series" :key="serie.id">
                    <v-card
                        class="mx-auto"
                        elevation="2"
                    >
                        
                        <v-card-title>
                        {{ serie.full_name }} ({{ serie.videogame.name }})
                            <v-avatar>
                                <img
                                    :src="serie.videogame.name | gameIconLogo"
                                    :alt="serie.videogame.name"
                                >
                            </v-avatar>
                        </v-card-title>

                        <v-card-subtitle>
                            <v-col>
                                <div class="text-left">
                                    Start date: {{ serie.begin_at | moment }} <br> End date: {{ serie.end_at | moment }}
                                </div>
                            </v-col>
                        </v-card-subtitle>
                        <v-divider></v-divider>
                        <v-card-actions>
                            <v-chip v-for="tournament in serie.tournaments" :key="tournament.id">
                                {{ tournament.name }} 
                            </v-chip>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
            
        </v-col>
    </v-row>
</template>

<script>
import PandascoreAPI from '../config/api';
import TotalMatches from '../components/matches/TotalMatches.vue';
import moment from 'moment';
import gameIcon from '../config/gamelogo';

export default {
    name: 'Card-league-component',
    props: ['leagueDetails', 'series'],
    components: {
        TotalMatches,
    },

    data() {
        return {
            totalMatches: [],
            totalMatchesUpComing: [],
            totalMatchesRunning: [],
            totalMatchesPast: [],
            league_id: this.$route.params.id
        }
    },

    filters: {
        moment: function (date) {
            if (date !== null) {
                return moment(date).startOf('day').fromNow();
            }
            return 'Soon';
        },

        gameIconLogo: (game_name) => {
            if (game_name == 'CS:GO') {
                return gameIcon.csgo_logo
            }

            if (game_name == 'Dota 2') {
                return gameIcon.dota2_logo
            }

            if (game_name == 'Overwatch') {
                return gameIcon.overwatch_logo
            }

            if (game_name == 'PUBG') {
                return gameIcon.pubg_logo
            }

            if (game_name == 'Call of Duty') {
                return gameIcon.codmw_logo
            }

            if (game_name == 'Rainbow 6 Siege') {
                return gameIcon.rainbowsix_logo
            }
        }
    },

    beforeMount() {
        this.getMatchesOfLeague(this.league_id);
        this.getMatchesUpcoming(this.league_id);
        this.getMatchesRunning(this.league_id);
        this.getMatchesPast(this.league_id);
    },

    methods: {
        getMatchesOfLeague(league_id) {
            try {
                PandascoreAPI.getMatchesForLeague(league_id).then((response) => {
                    if (response.status == 200) {
                        this.totalMatches = response.data
                    };
                });
            } catch (error) {
                console.log(error)
            }
        },

        getMatchesUpcoming(league_id) {
            try {
                PandascoreAPI.getMatchesUpcomingForLeague(league_id).then((response) => {
                    if (response.status == 200) {
                        this.totalMatchesUpComing = response.data
                    };
                });
            } catch (error) {
                console.log(error);
            }
        },

        getMatchesRunning(league_id) {
            try {
                PandascoreAPI.getMatchesRunningForLeague(league_id).then((response) => {
                    if (response.status == 200) {
                        this.totalMatchesRunning = response.data
                    };
                });
            } catch (error) {
                console.log(error);
            }
        },

        getMatchesPast(league_id) {
            try {
                PandascoreAPI.getMatchesPastForLeague(league_id).then((response) => {
                    if (response.status == 200) {
                        this.totalMatchesPast = response.data
                    };
                });
            } catch (error) {
                console.log(error);
            }
        },
    }
}
</script>