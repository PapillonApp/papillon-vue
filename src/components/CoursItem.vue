<script>
    export default {
      props: ['subject', 'teacher', 'room', 'start', 'diff'],
    }
</script>

<template>
    <Cours v-wave class="animated">
                <CoursDate>
                    <CoursStart>{{start}}</CoursStart>
                    <CoursTime>{{diff}}</CoursTime>
                </CoursDate>
                <CoursData>
                    <CoursName>{{subject}}</CoursName>

                    <CoursIcons>
                        <CoursIcon>
                            <span class="material-symbols-outlined">
                                location_on
                            </span>
                            <p>{{room}}</p>
                        </CoursIcon>
                        <CoursIcon>
                            <span class="material-symbols-outlined">
                                account_circle
                            </span>
                            <p>{{teacher}}</p>
                        </CoursIcon>
                    </CoursIcons>
                </CoursData>
            </Cours>
</template>

<style scoped>
    Cours {
        flex: none;
        order: 1;
        flex-grow: 0;
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
        background: var(--elem-color);
        border-radius: 15px;
        display: flex;
        color: var(--light-text-color);
    }

    Cours > CoursDate {
        width: 72px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-right: 1px solid var(--elem-border);
    }

    Cours > CoursDate > CoursStart {
        font-style: normal;
        font-variation-settings: "wght" 650;
        font-size: 18px;
        line-height: 100%;

        display: flex;
        align-items: flex-end;
        text-align: center;
        letter-spacing: 0.02em;

        color: var(--light-text-color);
        margin-bottom: 4px;
    }

    Cours > CoursDate > CoursTime {
        font-style: normal;
        font-variation-settings: "wght" 500;
        font-size: 16px;
        line-height: 100%;

        display: flex;
        align-items: flex-end;
        text-align: center;
        letter-spacing: 0.02em;

        color: var(--light-text-color);
        opacity: 50%;
    }

    Cours > CoursData {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 12px;
        gap: 14px;
    }

    Cours > CoursData > CoursName {
        font-style: normal;
        font-variation-settings: "wght" 650;
        font-size: 20px;
        line-height: 100%;
        /* identical to box height, or 20px */

        color: var(--light-text-color);
    }

    Cours > CoursData > CoursIcons {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;
        padding: 0px;
        gap: 3px;
    }

    Cours > CoursData > CoursIcons > CoursIcon {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0px;
        gap: 4px;
        opacity: 50%;
    }

    Cours > CoursData > CoursIcons > CoursIcon > p {
        color: var(--light-text-color);
        font-variation-settings: "wght" 500;
        font-size: 16px;
        line-height: 100%;
    }

    Cours > CoursData > CoursIcons > CoursIcon > .material-symbols-outlined {
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