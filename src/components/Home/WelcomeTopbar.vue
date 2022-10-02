<script>
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let monthName = ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'];

    export default {
      props: ['title'],
      data() {
        return {
            title: this.title,
            day: day,
            month: monthName[month]
        }
      }
    }
</script>

<template>
    <div id="welcome-topbar">
        <div id="welcome-user-data">
            <img id="welcome-user-pdp"/>
            <div id="welcome-user-name">
                <p id="welcome-user-name-name">user</p>
                <p id="welcome-user-name-etab">etab</p>
            </div>
        </div>

        <div id="today-calendar" v-wave>
            <p id="today-calendar-day">{{day}}</p>
            <p id="today-calendar-date">{{month}}</p>
        </div>

        <h1>{{title}}</h1>
    </div>
</template>

<style scoped>
    #welcome-topbar {
        height: 200px;
        width: 100%;
        background: var(--theme-color);
        position: relative;
    } 

    #welcome-scrollzone {
        height: calc(100% - 200px);
        overflow-y: scroll;
        width: 100vw;
    }

    #today-calendar {
        width: 48px;
        height: 48px;
        background: #ffffff;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        right: 24px;
        top: 14px;
        position: absolute;
    }

    #today-calendar > #today-calendar-day {
        font-size: 22px;
        line-height: 20px;
        font-variation-settings: "wght" 600;
        color: var(--elem-text-color-active);
    }

    #today-calendar > #today-calendar-date {
        font-size: 16px;
        line-height: 16px;
        font-variation-settings: "wght" 500;
        color: var(--elem-text-color-active);
        opacity: 50%;
    } 

    #welcome-user-data {
        top: 18px;
        left: 24px;
        position: absolute;
        display: flex;
        align-items: center;
    }

    #welcome-user-name > #welcome-user-name-name {
        font-weight: normal;
        font-variation-settings: "wght" 600;
        font-size: 20px;
        line-height: 24px;

        color: #fff;

        width: 50vw;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    #welcome-user-name > #welcome-user-name-etab {
        font-weight: normal;
        font-variation-settings: "wght" 500;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 0.01em;

        color: #fff;
        opacity: 50%;

        width: 50vw;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    #welcome-user-pdp {
        width: 42px;
        height: 42px;
        border-radius: 50%;
        background: #00000010;
        margin-right: 12px;
        object-fit: cover;
    }

    #welcome-topbar > h1 {
        position: absolute;
        
        font-weight: normal;
        font-variation-settings: "wght" 700;
        font-size: 32px;
        line-height: 38px;

        color: #fff;

        bottom: 17px;
        left: 22px;
    }
</style>