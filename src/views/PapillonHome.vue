<script lang="ts">
  import WelcomeTopbar from '@/components/Home/WelcomeTopbar.vue'
  import CoursItem from '@/components/CoursItem.vue'

  import NavigationItem from '@/components/NavigationItem.vue'

  export default {
    components: {
      WelcomeTopbar,
      CoursItem,
      NavigationItem
    },
    data() {
      return {
        userName: '',
        userEtab: '',
        userAvatar: '',
        timetable : [],
      }
    },
    created() {
      this.getUserData()
      this.getTimetableRecent()
    },
    methods: {
      getUserData: async function() {
        const resp = await sendQL(`{
          user {
            name,
            avatar,
            studentClass {
              name
            },
            establishment {
              name
            }
          }
        }`)

        console.log(resp)
        if(resp.message == "Unknown session token") {
          // go to login
          window.location.href = '/login'
        }
        if(resp.message == "Missing 'Token' header") {
          // go to login
          window.location.href = '/login'
        }

        this.userName = resp.data.user.name
        this.userEtab = resp.data.user.establishment.name
        this.userAvatar = resp.data.user.avatar
      },
      getTimetableRecent: async function() {
        const resp = await sendQL(`{
          timetable {
            subject,
            teacher
            room,
            from,
            color,
            to
          }
        }`)

        if(resp.message == "Unknown session token") {
          // go to login
          window.location.href = '/login'
        }
        this.timetable = resp.data.timetable
        if(resp.data.timetable == null) {
          this.timetable = []
        }
        // only 3 next lessons
        this.timetable = this.timetable.slice(0, 3)
      },
      convertTime: function(time) {
        return convertTime(time)
      },
      timeDifference: function(from, to) {
        return timeDifference(from, to)
      }
    }
  }
</script>

<template>
  <main>
    <WelcomeTopbar title="Ma journée" :userName="userName" :userEtab="userEtab" :userAvatar="userAvatar"/>
    <div id="HomeData">
      <div class="list" id="welcome-coursList">
            <div id="ListTitle">
                <p>Emploi du temps</p>
                <RouterLink v-wave class="button" to="/edt">
                  Voir tout
                </RouterLink>
            </div>

            <div v-for='cours in timetable'>
              <CoursItem :start="convertTime(cours.from)" isCours="true" :diff="timeDifference(cours.from, cours.to)" :subject="cours.subject" :teacher="cours.teacher" :color="cours.color" :room="cours.room"/>
            </div>

            <div v-if='timetable.length == 0'>
              <CoursItem start="" diff="" color="" subject="Pas de cours pour aujourd'hui" :teacher="userName" :room="userEtab"/>
            </div>
        </div>
        <div class="list" id="welcome-coursList">
            <div id="ListTitle">
                <p>Outils de développement</p>
            </div>
            
            <ul class="NavigationList">
              <a href="/"><NavigationItem text="Rafraîchir l'app" subtitle="Relance l'app sans avoir besoin de la fermer" icon="refresh"/></a>
              <a href="/login"><NavigationItem text="Rafraîchir le token" subtitle="Ouvre le login pour rafraîchir les données de connexion à Pronote" icon="login"/></a>
            </ul>
        </div>
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
    padding-bottom: 24px;
  }
</style>