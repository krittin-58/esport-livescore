<template>
    <div>
        <h1>Schedules</h1><br>
        <calendar></calendar>
        <br>
    </div>
</template>

<script>
import Calendar from '@/components/Calendar.vue';
export default {
    name: 'Schedules-page',
    components: {
        Calendar,
    }
}
</script>