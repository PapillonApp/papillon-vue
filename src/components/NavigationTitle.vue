<script>
    let date = rn;
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    // add leading zero to single digit numbers
    if (day < 10) {
        day = '0' + day;
    }

    if (month < 10) {
        month = '0' + month;
    }

    // dateStr as yyyy-mm-dd
    let dateStr = year + '-' + (month + 1) + '-' + day;
    console.log(dateStr);

    export default {
      props: ['title', 'showDate'],
      data() {
        return {
            dateStr: dateStr,
            currentValue : dateStr
        }
      },
      mounted () {
        let rnPicker = document.getElementById('rnPicker');

        if(this.showDate) {
            rnPicker.addEventListener('change', function() {
                let newValue = rnPicker.value;
                let newDate = new Date(newValue);
                rn = newDate;
                
                document.dispatchEvent(new CustomEvent('dateChanged'));
            });
        }
      }
    }
</script>

<template>
    <div class="titleView">
        <p>{{title}}</p>
        <input v-if="showDate" type="date" id="rnPicker" name="rnPicker" :value="currentValue">
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
        color: hsl(var(--brand-h), 63%, 25%);
    }

    .titleView p {
        font-variation-settings: "wght" 650;
        font-size: 20px;
        padding: 16px 24px;
    }

    #rnPicker {
        position: absolute;
        right: 24px;
        -webkit-appearance: none;
        color: hsl(var(--brand-h), 63%, 25%, 75%);
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

    @media (prefers-color-scheme: dark) {
        .titleView {
            color: hsl(var(--brand-h), 63%, 85%);
        }

        #rnPicker {
            color: hsl(var(--brand-h), 63%, 85%, 75%);
        }
    }
</style>