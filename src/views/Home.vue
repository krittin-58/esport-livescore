<template>
  <div class="home">
    <IntroWebsite></IntroWebsite>
  </div>
</template>

<script>
// @ is an alias to /src
import IntroWebsite from '@/components/landing/SectionTwo.vue';

export default {
  name: 'Home',
  components: {
    IntroWebsite
  },
  data () {
    return {
      //
    }
  }
}
</script>
