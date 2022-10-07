// app functions
function updateThemecolor() {
    document.querySelector("meta[name=theme-color]").setAttribute("content", getComputedStyle(document.documentElement).getPropertyValue('--theme-color'));
}

updateThemecolor()

setInterval(() => {
    updateThemecolor()
}, 100);

// global vars
const API = "https://ams01.pronote.plus/"

function constructAuthURL(authData) {
    return API + "auth?url=" + authData.url + "&username=" + authData.username + "&password=" + authData.password + "&cas=" + authData.cas;
}

let token = localStorage.getItem("token");

// fetch ql
function fetchPapillon(endpoint, params) {
    // ajoute les paramètres à l'URL
    let baseURL = API + endpoint + "?";
    for (let key in params) {
        baseURL += "&" + key + "=" + params[key];
    }

    // envoie la requête et retourne la réponse
    return fetch(baseURL, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }).then((response) => response.json());
}

function sendQL(schema) {
    return fetchPapillon("query", {
        token: token,
        schema: schema,
    });
}