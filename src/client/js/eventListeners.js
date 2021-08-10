//function for the submit button
const submitFunction = () => {
    const submitBttn = document.getElementById('submit');

    submitBttn.addEventListener('click', (e) => {
        e.preventDefault();

        Promise.all([MyLib.weatherCall(), MyLib.pixCall()])
    })
}
export { submitFunction }

//function for the clear button 
const clearFunction = () => {
    const clearButton = document.getElementById('clear');

    clearButton.addEventListener('click', (e) => {
        e.preventDefault();
        MyLib.clearOptions();
    });
}
export { clearFunction }