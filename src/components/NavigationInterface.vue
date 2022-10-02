<template>
    <nav>
    <RouterLink to="/">
      <div class="nav-item" v-wave>
        <span class="material-symbols-outlined">
        home
        </span>
        <p>Accueil</p>
      </div>
    </RouterLink>
    <RouterLink to="/edt">
      <div class="nav-item" v-wave>
        <span class="material-symbols-outlined">
        event_note
        </span>
        <p>Cours</p>
      </div>
    </RouterLink>
  </nav>
</template>

<style scoped>
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
    width: 100%;
    height: 100%;
    color: var(--elem-text-color);
    text-decoration: none;
  }

  nav > a > .nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    color: var(--elem-text-color);
    text-decoration: none;
    background: #00000000;
  }

  nav > a > .nav-item > p {
      font-variation-settings: "wght" 650;
      font-size: 16px;
  }

  nav > .router-link-active > .nav-item > * {
    color: var(--elem-text-color-active);
  }

  nav > .router-link-active > .nav-item > .material-symbols-outlined {
    font-variation-settings:
    'FILL' 1,
    'wght' 500,
    'GRAD' 0,
    'opsz' 48
}
</style>