<template>
    <v-container>
        <div id="introduction-game">
            <v-row>
                <v-col cols="12">
                    <v-card class="hero-card">
                        <v-row>
                            <v-col cols="6">
                                <v-card-title><h1>eSport - Livescore!</h1></v-card-title>
                                <v-card-title><h3>ติดตามผลคะแนนกีฬาอีสปอร์ต</h3></v-card-title>
                                <v-card-title>
                                    <v-img
                                        v-for="gameIcon in gameLogoIcons"
                                        :key="gameIcon.name"
                                        :src="gameIcon.path_icon"
                                        :alt="gameIcon.name"
                                        max-width="100px"
                                        max-height="100px"
                                        aspect-ratio="1">
                                    </v-img>
                                </v-card-title>
                            </v-col>
                            <v-col cols="6">
                                <!-- <div><v-img src="https://via.placeholder.com/150"></v-img></div> -->
                            </v-col>
                        </v-row>
                    </v-card>
                    <v-card>
                        <v-row>
                            <v-col cols="12">
                                <!-- Teams Component -->
                                <v-card-title>ค้นหาทีมจากเกมที่คุณชื่นชอบ! </v-card-title>
                                <teams :teamList="teams" :loading="loading"></teams>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
            </v-row>
        </div>
    </v-container>
</template>

<script>
import PandascoreAPI from '../../config/api';
import Teams from '../landing/Teams.vue';

export default {
    name: 'SectionTwo',
    components: {
        Teams,
    },

    data() {
        return {
            gameLogoIcons: [
                {
                    path_icon: require('@/assets/icons/icons8-call-of-duty-modern-warfare-100.png'),
                    name: 'Call of Duty: Modern Warfare'
                },
                {
                    path_icon: require('@/assets/icons/icons8-dota-2-100.png'),
                    name: 'DOTA 2'
                },
                {
                    path_icon: require('@/assets/icons/icons8-counter-strike-100.png'),
                    name: 'CS:GO'
                },
                {
                    path_icon: require('@/assets/icons/icons8-pubg-100.png'),
                    name: 'PUBG'
                },
                {
                    path_icon: require('@/assets/icons/icons8-rainbow-six-siege-100.png'),
                    name: 'Rainbow Six: Siege'
                },
                {
                    path_icon: require('@/assets/icons/icons8-overwatch-100.png'),
                    name: 'OVERWATCH'
                }
            ],

            teams: [],
            loading: false,
            hide: false,
        }
    },

    mounted() {
        this.getTeams(24,4);
    },

    methods: {
        getTeams(per_page, videogame_id) {
            PandascoreAPI.getListTeams(per_page, videogame_id).then((response) => {
                this.loading = true
                if (response.data !== null) {
                    this.teams = response.data;
                    this.loading = false;
                }
            });
        },
    }
}
</script>

<style>
/* #introduction-game {
    background: transparent;
} */

</style>