<script lang="ts">
  import WelcomeTopbar from '@/components/Home/WelcomeTopbar.vue'
  import CoursItem from '@/components/CoursItem.vue'

  export default {
    components: {
      WelcomeTopbar,
      CoursItem
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
            to
          }
        }`)

        this.timetable = resp.data.timetable
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
                <button v-wave>Voir tout</button>
            </div>

            <div v-for='cours in timetable'>
              <CoursItem :start="convertTime(cours.from)" :diff="timeDifference(cours.from, cours.to)" :subject="cours.subject" :teacher="cours.teacher" :room="cours.room"/>
            </div>

            <div v-if='timetable.length == 0'>
              <CoursItem start="" diff="" subject="Pas de cours pour aujourd'hui" :teacher="userName" :room="userEtab"/>
            </div>
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
  }
</style>