<script lang="ts">
  import WelcomeTopbar from '@/components/Home/WelcomeTopbar.vue'
  import CoursItem from '@/components/CoursItem.vue'

  export default {
    components: {
      WelcomeTopbar,
      CoursItem
    }
  }
</script>

<template>
  <main>
    <WelcomeTopbar title="Ma journée" />
    <div id="HomeData">
      <List id="welcome-coursList">
            <ListTitle>
                <p>Emploi du temps</p>
                <button v-wave>Voir tout</button>
            </ListTitle>

            <CoursItem start="8h30" diff="1h00" subject="Espagnol" teacher="Mme. Dupont" room="A101"/>
            <CoursItem start="9h30" diff="2h00" subject="Mathémathiques" teacher="M. Martin-Sanchez" room="B204"/>
            <CoursItem start="11h35" diff="1h00" subject="Ens. scientifique" teacher="Mme. Caillou" room="D202"/>
        </List>
    </div>
  </main>
</template>

<style scoped>
  #welcome-topbar {
    position: fixed;
    top: 0;
    left: 0;
  }

  #HomeData {
    padding-top: 200px;
  }

  List {
    padding: 22px 23px;

    display: flex;
    flex-direction: column;
    gap: 11px;
  }

  List > ListTitle {
      display: flex;
      position: relative;
      align-items: center;
  }

  List > ListTitle > p {
      font-style: normal;
      font-variation-settings: "wght" 650;
      font-size: 16px;
      line-height: 100%;
      /* identical to box height, or 16px */

      letter-spacing: 0.02em;

      opacity: 0.7;
      color: var(--elem-text-color);
  }

  List > ListTitle > button {
      -webkit-appearance: none;
      background: none;
      border: none;

      margin: 0px;
      padding: 0px;

      text-align: right;
      position: absolute;
      right: 0px;

      font-style: normal;
      font-variation-settings: "wght" 650;
      font-size: 16px;

      text-align: right;
      letter-spacing: 0.02em;

      color: var(--elem-text-color-active);

      padding: 5px 10px;
      border-radius: 5px;
      margin-top: -1.5px;
      margin-right: -5px;
  }
</style>