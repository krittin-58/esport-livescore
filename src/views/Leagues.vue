<template>
    <div>
        <h1>Leagues</h1>
        <v-row>
            <v-col cols="12">
                <browser-leagues></browser-leagues>
            </v-col>
            <!-- <v-col cols="4">
                <up-coming-leagues></up-coming-leagues>
            </v-col> -->
        </v-row>
    </div>
</template>

<script>
import BrowserLeagues from '@/components/leagues/BrowserLeague.vue';
// import UpComingLeagues from '@/components/leagues/UpcomingLeagues.vue';

export default {
    name: 'Leagues-page',
    components: {
        BrowserLeagues,
        // UpComingLeagues,
    }
}
</script>