<script lang="ts">
  import WelcomeTopbar from '@/components/Home/WelcomeTopbar.vue'

  export default {
    components: {
      WelcomeTopbar
    }
  }

  let metaThemeColor = document.querySelector("meta[name=theme-color]");
  metaThemeColor.setAttribute("content", "#D5E7FF");
</script>

<template>
  <main>
    <WelcomeTopbar title="Ma journée" />
  </main>
</template>