<script>
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let monthName = ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'];

    export default {
      props: ['title', 'userName', 'userEtab', 'userAvatar'],
      data() {
        return {
            day: day,
            month: monthName[month]
        }
      }
    }
</script>

<template>
    <div id="welcome-topbar">
        <div id="welcome-user-data">
            <img id="welcome-user-pdp" :src="userAvatar"/>
            <div id="welcome-user-name">
                <p id="welcome-user-name-name">{{userName}}</p>
                <p id="welcome-user-name-etab">{{userEtab}}</p>
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
        background: hsl(var(--brand-h), 63%, 92%);
        position: relative;
        z-index: 999999999999;
        color: hsl(var(--brand-h), 63%, 25%);
    } 

    #welcome-scrollzone {
        height: calc(100% - 200px);
        overflow-y: scroll;
        width: 100vw;
    }

    #today-calendar {
        width: 48px;
        height: 48px;
        background: hsl(var(--brand-h), 63%, 25%, 10%);
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
    }

    #today-calendar > #today-calendar-date {
        font-size: 16px;
        line-height: 16px;
        font-variation-settings: "wght" 500;
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

        bottom: 17px;
        left: 22px;
    }

    @media (prefers-color-scheme: dark) {
        #welcome-topbar {
            background: hsl(var(--brand-h), 63%, 12%);
            color: hsl(var(--brand-h), 63%, 85%);
        } 

        #today-calendar {
            background: hsl(var(--brand-h), 63%, 25%, 20%);
        }
    }
</style>