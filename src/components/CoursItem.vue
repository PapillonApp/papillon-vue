<script>
    export default {
      props: ['subject', 'teacher', 'room', 'start', 'diff', 'color', 'isCours'],
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
    <div class="cours" v-wave>
                <div class="coursDate" v-if="isCours">
                    <div class="CoursStart">{{start}}</div>
                    <div class="CoursTime">{{diff}}</div>
                </div>
                <div class="coursData">
                    <div class="coursName">{{subject}}</div>

                    <div class="coursIcons">
                        <div class="coursIcon">
                            <span class="material-symbols-outlined">
                                location_on
                            </span>
                            <p>{{room}}</p>
                        </div>
                        <div class="coursIcon">
                            <span class="material-symbols-outlined">
                                account_circle
                            </span>
                            <p>{{teacher}}</p>
                        </div>
                    </div>
                </div>
            </div>
</template>

<style scoped>
    .cours {
        flex: none;
        order: 1;
        flex-grow: 0;
        box-shadow:
            0px 1px 3px rgba(0, 0, 0, 0.15),
            0px 1px 2px rgba(0, 0, 0, 0.1)
        ;
        background: var(--elem-color);
        border-radius: 16px;
        display: flex;
        color: var(--light-text-color);
        overflow: hidden;
    }

    .cours > .coursDate {
        width: 72px;
        min-width: 72px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: var(--color);
    }

    .cours > .coursDate > .CoursStart {
        font-style: normal;
        font-variation-settings: "wght" 650;
        font-size: 18px;
        line-height: 100%;

        display: flex;
        align-items: flex-end;
        text-align: center;
        letter-spacing: 0.02em;

        color: #fff;
        margin-bottom: 4px;
    }

    .cours > .coursDate > .CoursTime {
        font-style: normal;
        font-variation-settings: "wght" 500;
        font-size: 16px;
        line-height: 100%;

        display: flex;
        align-items: flex-end;
        text-align: center;
        letter-spacing: 0.02em;

        color: #fff;
        opacity: 50%;
    }

    .cours > .coursData {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 12px;
        gap: 14px;
    }

    .cours > .coursData > .coursName {
        font-style: normal;
        font-variation-settings: "wght" 650;
        font-size: 20px;
        line-height: 100%;
        /* identical to box height, or 20px */

        color: var(--light-text-color);
    }

    .cours > .coursData > .coursIcons {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;
        padding: 0px;
        gap: 3px;
    }

    .cours > .coursData > .coursIcons > .coursIcon {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0px;
        gap: 4px;
        opacity: 50%;
    }

    .cours > .coursData > .coursIcons > .coursIcon > p {
        color: var(--light-text-color);
        font-variation-settings: "wght" 500;
        font-size: 16px;
        line-height: 100%;
    }

    .cours > .coursData > .coursIcons > .coursIcon > .material-symbols-outlined {
        font-variation-settings:
        'FILL' 1,
        'wght' 500,
        'GRAD' 0,
        'opsz' 48;

        font-size: 22px;
        opacity: 50%;

        color: var(--light-text-color);
    }
</style>