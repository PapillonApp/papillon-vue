<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavigationInterface from './components/NavigationInterface.vue';
</script>

<template>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
  <NavigationInterface />
</template>

<style scoped>
  main {
    height: calc(100vh - var(--menuHeight));
    overflow: hidden;
    overflow-y: scroll;
  }
</style>

<style>
  .fade-enter-active {
    transition: all 300ms;
  }

  .fade-enter-from {
    transform: translateY(30px) scaleY(1.08);
  }
</style>