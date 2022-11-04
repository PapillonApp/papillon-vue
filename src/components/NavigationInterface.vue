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

    <RouterLink to="/homework">
      <div class="nav-item" v-wave>
        <span class="material-symbols-outlined">
          checklist
        </span>
        <p>Devoirs</p>
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
      background-color: hsl(var(--brand-h), 63%, 92%);
      padding-bottom: var(--menuPadding);
      overflow-y: scroll;
      position: fixed;
      bottom: 0;
      width: 100%;
      padding-top: 2px;
      color: hsl(var(--brand-h), 63%, 41%);
      /* border-top: 1px solid var(--elem-border); */
  }

  nav > a {
    display: flex;
    width: 100%;
    height: 100%;
    text-decoration: none;

    margin: 5px;
    margin-bottom: 15px;
  }

  nav > a > .nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    text-decoration: none;
    background: #00000000;

    border-radius: 10px !important;
  }

  .nav-item * {
    color: hsl(var(--brand-h), 23%, 32%);
  }

  nav > a > .nav-item > p {
      font-variation-settings: "wght" 650;
      font-size: 16px;
  }

  nav span {
    padding: 4px 0px;
    transition: padding 0.2s ease;
    margin-top: 0px;
  }

  nav > .router-link-active > .nav-item > span {
    background-color: hsl(var(--brand-h), 63%, 82%);
    border-radius: 300px;
    padding: 4px 20px;
  }

  nav > .router-link-active > .nav-item > * {
    color: #1B1F1D;
  }

  nav > .router-link-active > .nav-item > .material-symbols-outlined {
    font-variation-settings:
    'FILL' 1,
    'wght' 500,
    'GRAD' 0,
    'opsz' 48
  }

  @media (prefers-color-scheme: dark) {
    nav {
      background-color: hsl(var(--brand-h), 63%, 8%);
      color: hsl(var(--brand-h), 63%, 82%) !important;
    }

    nav * {
      color: hsl(var(--brand-h), 23%, 52%) !important;
    }

    nav > .router-link-active > .nav-item > span {
      background-color: hsl(var(--brand-h), 63%, 12%);
    }

    nav > .router-link-active > .nav-item > * {
      color: hsl(var(--brand-h), 63%, 82%);
    }
  }
</style>