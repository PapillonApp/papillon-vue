<script lang="ts">
  import NavigationTitle from '@/components/NavigationTitle.vue';
  import CoursInfo from '@/components/CoursInfo.vue';
  import NavigationItem from '@/components/NavigationItem.vue';

  export default {
    components: {
      NavigationTitle,
      CoursInfo,
      NavigationItem
    },
    data() {
      return {
        timetable : [],
      }
    },
    created() {
      this.getTimetable(rn)

      self = this
      document.addEventListener('dateChanged', function() {
        self.getTimetable(rn)
      });
    },
    methods: {
      getTimetable: async function(date) {
        // get date as yyyy-mm-dd
        let dateStr = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
        const resp = await sendQL(`{
          timetable(from: "${dateStr}") {
            subject,
            teacher
            room,
            from,
            to,
            color
          }
        }`)

        this.timetable = resp.data.timetable
        if(resp.data.timetable == null) {
          this.timetable = []
        }
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

    <NavigationTitle title="Cours" showDate="True"/>

    <div id="EdtData" class="NavigationContent">

      <div id="edt-coursList">
        <div v-for='cours in timetable'>
          <CoursInfo :start="convertTime(cours.from)" :end="convertTime(cours.to)" :diff="timeDifference(cours.from, cours.to)" :subject="cours.subject" :teacher="cours.teacher" :room="cours.room" :color="cours.color"/>
        </div>

        <div v-if='timetable.length == 0'>
          <CoursInfo start="" diff="" subject="Pas de cours pour aujourd'hui" :teacher="userName" :room="userEtab"/>
        </div>
      </div>

    </div>

  </main>
</template>

<style scoped>
  #EdtData {
    padding-top: 1px !important;
  }
</style>
