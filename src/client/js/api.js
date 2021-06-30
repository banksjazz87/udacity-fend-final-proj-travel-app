function apiCall(){
    let button = document.getElementById('submit');
    button.addEventListener('click', () => {
        alert('this is working, batman');
    });
}

export{apiCall}