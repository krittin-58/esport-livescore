<template>
    <div>
        <h2>Leagues: {{ display }}</h2>
    </div>
</template>

<script>
export default {
    name: 'League-detail',
    data() {
        return {
            display: this.$route.params.id,
        }
    }
}
</script>