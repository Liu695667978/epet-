<template>
  <div>
    <router-view></router-view>
    <FootGuide/>
  </div>
</template>

<script>
  import FootGuide from './components/FoodGuide/FootGuide.vue'
  export default {
    components: {
      FootGuide
    },

  }
</script>

<style>

</style>
