//function for the submit button
const submitBttn = document.getElementById('submit');

submitBttn.addEventListener('click', (e) => {
    e.preventDefault();

    MyLib.weatherCall();
})