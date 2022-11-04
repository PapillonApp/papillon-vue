<script>
    export default {
      props: ['subject', 'teacher', 'room', 'start', 'diff', 'color', 'end'],
      mounted() {
        let color = this.color
        if(this.color == undefined) {
            color = '#3F33C5'
        }
        let newColor = color
        this.$el.style.setProperty('--color', newColor)
      }
    }
</script>

<template>
    <div class="cours">
                <div class="preCours">
                    <div class="leftPreCours">
                        <div class="preCoursTab"></div>
                        <div class="CoursStart"><span>{{start}}</span> à {{end}}</div>
                    </div>
                    <div class="CoursTime">{{diff}} de cours</div>
                </div>        

                <div class="coursData" v-wave>
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
        width: 100vw;
        margin-top: 15px;
        margin-bottom: 30px;
    }

    .cours > .preCours {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .preCours .preCoursTab {
        width: 20px;
        max-width: 20px;
        height: 10px;
        background: var(--color);
        border-radius: 0px 300px 300px 0px;
        margin-right: 10px;
    }

    .preCours .CoursStart {
        font-variation-settings: "wght" 500;
        color: var(--light-text-color);
    }

    .preCours .CoursStart span {
        font-variation-settings: "wght" 650;
    }

    .preCours > .leftPreCours {
        display: flex;
        align-items: center;
    }

    .preCours > .CoursTime {
        color: var(--light-text-color);
        font-variation-settings: "wght" 400;
        opacity: 50%;
        margin-right: 20px;
    }

    .cours > .coursData {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 12px;
        gap: 14px;
        border-radius: 15px;
        border: 1px solid var(--elem-border);
        margin-top: 10px;
        margin-left: 20px;
        margin-right: 20px;
        color: var(--light-text-color) !important;
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