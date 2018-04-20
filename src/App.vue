<template>
  <div>
    <router-view></router-view>
    <FootGuide v-show="$route.meta.isShow"/>
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
