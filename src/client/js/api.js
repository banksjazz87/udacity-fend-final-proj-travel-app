//import { keysInfo } from "./keys.js"

function apiCall() {
    let button = document.getElementById('submit');
    button.addEventListener('click', () => {
        MyShit.keysInfo();
    })
    console.log('crap');
}


export { apiCall }