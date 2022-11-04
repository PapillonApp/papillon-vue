<script lang="ts">
  import NavigationTitle from '@/components/NavigationTitle.vue';
  import HomeworkItem from '@/components/HomeworkItem.vue';
  import NavigationItem from '@/components/NavigationItem.vue';

  export default {
    components: {
      NavigationTitle,
      HomeworkItem,
      NavigationItem
    },
    data() {
      return {
        homeworks : [],
      }
    },
    created() {
      this.getHomework(rn)

      self = this
      document.addEventListener('dateChanged', function() {
        self.getHomework(rn)
      });
    },
    methods: {
      getHomework: async function(date) {
        // get date as yyyy-mm-dd
        let dateStr = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
        const resp = await sendQL(`{
          homeworks(from: "2022-09-20") {
            subject,
            description,
            htmlDescription,
            givenAt,
            color,
            files {
                subject,
                name,
                url
            }
          }
        }`)

        this.homeworks = resp.data.homeworks
        if(resp.data.homeworks == null) {
          this.homeworks = []
        }

        console.log(resp)
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

    <NavigationTitle title="Devoirs" showDate="True"/>

    <div id="HwData" class="NavigationContent">
      <HomeworkItem v-for="hw in homeworks" :key="hw.id" :subject="hw.subject" :description="hw.description" :givenAt="hw.givenAt" :htmlDescription="hw.htmlDescription" :color="hw.color"/>
    </div>

  </main>
</template>

<style scoped>
  #HwData {
    padding-top: 1px !important;
  }
</style>
