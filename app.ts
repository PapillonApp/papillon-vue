// app functions
function updateThemecolor() {
    document.querySelector("meta[name=theme-color]").setAttribute("content", getComputedStyle(document.documentElement).getPropertyValue('--theme-color'));
}

updateThemecolor()

setInterval(() => {
    updateThemecolor()
}, 100);