<script>
    export default {
      props: ['title'],
    }
</script>

<template>
    <div class="titleView">
        <p>{{title}}</p>
    </div>
</template>

<style scoped>
    .titleView {
        width: 100%;
        background-color: var(--theme-color);
    }

    .titleView p {
        font-variation-settings: "wght" 650;
        font-size: 20px;
        color: #fff;
        padding: 16px 24px;
    }
</style>