<script lang="ts">
    import NavigationTitle from '@/components/NavigationTitle.vue';
    import { ref } from 'vue'

    let oldAuthData = localStorage.getItem('authData')
    
    if(oldAuthData) {
        oldAuthData = JSON.parse(oldAuthData)

        let authURL = constructAuthURL(oldAuthData);
        fetch(authURL)
            .then(response => response.json())
            .then(function(resp) {
                let token;

                // error handling
                if(resp.code == 1) {
                    console.log("ENT inconnu");
                }
                else if(resp.code == 3 && resp.token == null) {
                    console.log("Identifiants incorrects");
                }

                if(resp.token !== undefined) {
                    token = resp.token;
                    localStorage.setItem('token', token);
                    // go to /
                    window.location.href = '/';
                }
            })
    }
  
    export default {
      components: {
        NavigationTitle
      },
      methods: {
        login() {
          // login
            let authData = {
                username: document.getElementById('username').value || '',
                password: document.getElementById('password').value || '',
                url: document.getElementById('url').value || '',
                cas: document.getElementById('cas').value || 'none'
            }

            let authURL = constructAuthURL(authData);
            
            fetch(authURL)
            .then(response => response.json())
            .then(function(resp) {
                let token;

                // error handling
                if(resp.code == 1) {
                    console.log("ENT inconnu");
                }
                else if(resp.code == 3 && resp.token == null) {
                    console.log("Identifiants incorrects");
                }

                if(resp.token !== undefined) {
                    token = resp.token;
                    localStorage.setItem('token', token);
                    localStorage.setItem('authData', JSON.stringify(authData));
                    // go to /
                    window.location.href = '/';
                }
            })
        }
      }
    }
</script>

<template>
    <main>
        <NavigationTitle title="Connexion à Pronote+"/>
        <div id="LoginBox">
            <input v-wave id="username" type="text" placeholder="Identifiant Pronote" v-model="username" />
            <input v-wave id="password" type="password" placeholder="Mot de passe Pronote" v-model="password" />
            <input v-wave id="url" type="url" placeholder="URL de l'interface Pronote" v-model="url" />
            <input v-wave id="cas" type="text" placeholder="ENT tel que dans l'API" v-model="cas" /><br/>
            <div class="button" v-wave id="loginButton" @click="login">Se connecter</div>
        </div>
    </main>
</template>

<style scoped>
    #LoginBox {
        margin: 15px;
    }

    input {
        width: calc(100% - 30px);
        padding: 12px 15px;
        font-size: 16px;

        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;

        border: none;

        border-bottom: 2px solid var(--elem-border);
        background: var(--elem-color);

        margin-bottom: 10px;
    }

    input:focus {
        outline: none;
        border-bottom: 2px solid var(--elem-text-color-active);
        background: var(--elem-color-dark);
    }

    .button {
        min-width: 64dp;
        padding: 12px 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--elem-text-color-active);
        font-size: 15px;
        color: #fff;
        border-radius: 6px;
        font-variation-settings: "wght" 600;
        letter-spacing: 0.1em;
        text-transform: uppercase;
    }

    .button * {
        margin: 0;
        padding: 0;
    }
</style>