//import { keysInfo } from "./keys.js"

function apiCall() {
    let button = document.getElementById('submit');
    button.addEventListener('click', () => {
        window.MyLibrary.keysInfo();
    })
}


export { apiCall }