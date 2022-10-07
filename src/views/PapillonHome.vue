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
          timetable(from: "2022-10-07") {
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
        let date = new Date(time)

        // remove 2 hours
        date.setHours(date.getHours() - 2)

        let hours = date.getHours()
        let minutes = date.getMinutes()

        if (minutes < 10) {
          minutes = '0' + minutes
        }

        return hours + 'h' + minutes
      },
      timeDifference: function(from, to) {
        let dateFrom = new Date(from)
        let dateTo = new Date(to)

        // remove 2 hours
        dateFrom.setHours(dateFrom.getHours() - 2)
        dateTo.setHours(dateTo.getHours() - 2)

        let hours = dateTo.getHours() - dateFrom.getHours()
        let minutes = dateTo.getMinutes() - dateFrom.getMinutes()

        if (minutes < 10) {
          minutes = '0' + minutes
        }

        return hours + 'h' + minutes
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

  .list {
    padding: 22px 23px;

    display: flex;
    flex-direction: column;
    gap: 11px;
  }

  .list > #ListTitle {
      display: flex;
      position: relative;
      align-items: center;
  }

  .list > #ListTitle > p {
      font-style: normal;
      font-variation-settings: "wght" 650;
      font-size: 16px;
      line-height: 100%;
      /* identical to box height, or 16px */

      letter-spacing: 0.02em;

      opacity: 0.7;
      color: var(--elem-text-color);
  }

  .list > #ListTitle > button {
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