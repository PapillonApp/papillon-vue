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

// global functs
function convertTime(time) {
    let date = new Date(time)

    // remove 2 hours
    date.setHours(date.getHours() - 2)

    let hours = date.getHours()
    let minutes = date.getMinutes()
    let minutesString = minutes.toString()

    if (minutes < 10) {
        minutesString = '0' + minutes
    }

    return hours + 'h' + minutesString
}


function timeDifference(from, to) {
    let dateFrom = new Date(from)
    let dateTo = new Date(to)

    // remove 2 hours
    dateFrom.setHours(dateFrom.getHours() - 2)
    dateTo.setHours(dateTo.getHours() - 2)

    let hours = dateTo.getHours() - dateFrom.getHours()
    let minutes = dateTo.getMinutes() - dateFrom.getMinutes()

    if (minutes < 10) {
        minutes = '0' + minutes
    }

    return hours + 'h' + minutes
}

// notifications
function notify(message) {
    Toastify({
        text: message,
        duration: 3000,
        close: false,
        className: "notification",
        gravity: "bottom", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true,
        onClick: function(){} // Callback after click
      }).showToast();
}

// date management
let rn = new Date();