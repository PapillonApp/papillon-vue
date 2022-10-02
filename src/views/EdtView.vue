<script lang="ts">
  import NavigationTitle from '@/components/NavigationTitle.vue';

  export default {
    components: {
      NavigationTitle
    }
  }
</script>

<template>
  <maain>
    <NavigationTitle title="Cours"/>
  </maain>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
