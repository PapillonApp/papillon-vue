<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterView />

  <nav>
    <RouterLink to="/">
      <span class="material-symbols-outlined">
      home
      </span>
      <p>Accueil</p>
    </RouterLink>
    <RouterLink to="/about">
      <span class="material-symbols-outlined">
      info
      </span>
      <p>A propos</p>
    </RouterLink>
  </nav>
</template>

<style scoped>
  main {
    height: calc(100vh - var(--menuHeight));
    overflow: hidden;
    overflow-y: scroll;
  }

  nav {
      height: var(--menuHeight);
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: var(--elem-color);
      padding-bottom: var(--menuPadding);
      overflow-y: scroll;
      position: fixed;
      bottom: 0;
      width: 100%;
  }

  nav > a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    color: var(--elem-text-color);
    text-decoration: none;
  }

  nav > a > p {
      font-variation-settings: "wght" 650;
      font-size: 16px;
  }

  nav > .router-link-active > * {
    color: var(--elem-text-color-active);
  }

  nav > .router-link-active > .material-symbols-outlined {
    font-variation-settings:
    'FILL' 1,
    'wght' 500,
    'GRAD' 0,
    'opsz' 48
}
</style>
