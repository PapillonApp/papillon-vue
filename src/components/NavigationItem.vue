<script>
    export default {
      props: ['text', 'icon', 'subtitle'],
    }
</script>

<template>
    <div class="NavigationItem" v-wave>
        <span class="material-symbols-outlined">
            {{ icon }}
        </span>
        <div class="NavigationItem__text">
            <p>{{ text }}</p>
            <small>{{ subtitle }}</small>
        </div>
    </div>
</template>

<style scoped>
    .NavigationItem {
        width: 100%;
        display: flex;
        padding: 14px 20px;
        align-items: center;
        border-bottom: 1px solid var(--elem-border);
    }

    .NavigationItem * {
        color: var(--light-text-color);
    }

    .NavigationItem > .NavigationItem__text {
        margin-left: 16px;
        max-width: 82%;
    }

    .NavigationItem__text p {
        font-variation-settings: "wght" 600;
        font-size: 16px;
    }

    .NavigationItem__text small {
        font-variation-settings: "wght" 400;
        font-size: 16px;
        opacity: 50%;
    }
</style>