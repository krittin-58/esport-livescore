<template>
    <div>
        <h1>Games</h1>
        <game-section></game-section>
    </div>
</template>

<script>
import GameSection from '@/components/landing/SectionOne.vue';

export default {
    name: 'Games',
    components: {
        GameSection
    }
}
</script>