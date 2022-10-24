<script>
    let date = rn;
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    // dateStr as yyyy-mm-dd
    let dateStr = year + '-' + (month + 1) + '-' + day;

    export default {
      props: ['title', 'showDate'],
      data() {
        return {
            dateStr: dateStr
        }
      },
      mounted () {
        let rnPicker = document.getElementById('rnPicker');
        rnPicker.addEventListener('change', function() {
            let newValue = rnPicker.value;
            let newDate = new Date(newValue);
            rn = newDate;
        });
      }
    }
</script>

<template>
    <div class="titleView">
        <p>{{title}}</p>
        <input v-if="showDate" type="date" id="rnPicker" name="rnPicker" :value="dateStr">
    </div>
</template>

<style scoped>
    .titleView {
        width: 100%;
        background-color: var(--theme-color);
        display: flex;
        align-items: center;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 999999;
    }

    .titleView p {
        font-variation-settings: "wght" 650;
        font-size: 20px;
        color: #fff;
        padding: 16px 24px;
    }

    #rnPicker {
        position: absolute;
        right: 24px;
        -webkit-appearance: none;
        color: #ffffff77;
        border: none;
        font-size: 18px;
        background: none;
        text-align: right;
        font-variation-settings: "wght" 500;
    }

    #rnPicker:focus {
        outline: none;
    }

    input[type="date"]::-webkit-inner-spin-button,
    input[type="date"]::-webkit-calendar-picker-indicator {
        display: none;
        -webkit-appearance: none;
    }
</style>