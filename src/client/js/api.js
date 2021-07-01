import { keysInfo } from "./keys.js"
function apiCall(){
    let button = document.getElementById('submit');
    button.addEventListener('click', () => {
        //Client.keysInfo
       keysInfo()
        });
}

export{apiCall}