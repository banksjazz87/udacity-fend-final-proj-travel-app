function clickTest(){
    let button = document.getElementById('submit');
    button.addEventListener('click', () => {
        alert("The button has been clicked");
    });
}

export{clickTest}