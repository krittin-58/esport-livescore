<template>
    <v-col md="3">
        <v-card-title>
            Matches: {{ matches.length }} 
        </v-card-title>

        <v-card-subtitle>
            Upcoming: {{ upcoming.length }} | Running: {{ running.length}} | Past: {{ past.length }}
        </v-card-subtitle>
    </v-col>
</template>

<script>
export default {
    props: ['matches', 'upcoming', 'running', 'past']
}
</script>