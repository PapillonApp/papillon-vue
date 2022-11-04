<script>
    export default {
      props: ['color', 'description', 'givenAt', 'htmlDescription', 'subject'],
      mounted() {
        let color = this.color
        if(this.color == undefined) {
            color = '#3F33C5'
        }
        let newColor = lightenDarkenColor(color, -50)
        this.$el.style.setProperty('--color', newColor)
      }
    }
</script>

<template>
    <div class="homework" v-wave>
        <p>{{subject}}</p>
        <p>{{description}}</p>
    </div>
</template>

<style scoped>
  .homework {
    color: var(--elem-text-color) !important;
  }
</style>