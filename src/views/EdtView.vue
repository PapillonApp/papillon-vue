<script lang="ts">
  import NavigationTitle from '@/components/NavigationTitle.vue';
  import CoursItem from '@/components/CoursItem.vue';

  export default {
    components: {
      NavigationTitle,
      CoursItem
    },
    data() {
      return {
        timetable : [],
      }
    },
    created() {
      this.getTimetable(rn)
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
            to
          }
        }`)

        this.timetable = resp.data.timetable
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
      <div class="list" id="edt-coursList">
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
  
</style>
