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
        <h1>{{subject}}</h1>
        <p>{{description}}</p>
    </div>
</template>

<style scoped>

</style>