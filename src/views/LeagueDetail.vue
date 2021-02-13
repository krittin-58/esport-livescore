<template>
    <div>
        <loading :loading="loading"></loading>
        <card-details :leagueDetails="leagueDetails" :series="series"></card-details>
    </div>
</template>

<script>
import PandascoreAPI from '../config/api';
import CardDetails from '../components/CardLeagueDetails.vue';
import Loading from '../components/Loading.vue';

export default {
    name: 'League-detail',
    components: {
        CardDetails,
        Loading,
    },

    data() {
        return {
            league_id: this.$route.params.id,
            leagueDetails: Object,
            series: null,
            loading: false,
        }
    },

    beforeMount() {
        this.getLeagueDetails(this.league_id);
        this.getSeriesLeague(this.league_id);
    },

    methods: {
        getLeagueDetails(id) {
            try {
                PandascoreAPI.getLeagueId(id).then((response) => {
                    this.loading = true
                    if(response.status == 200) {
                        this.leagueDetails = response.data;
                        this.loading = false;
                    }
                });
            } catch (error) {
                console.log(error);
            }
        },

        getSeriesLeague(id) {
            try {
                PandascoreAPI.getSeriesforLeague(id).then((response) => {
                    this.loading = true
                    if (response.status == 200) {
                        this.series = response.data
                        this.loading = false
                    }
                });
            } catch (error) {
                console.log(error);
            }
        },
    }
}
</script>