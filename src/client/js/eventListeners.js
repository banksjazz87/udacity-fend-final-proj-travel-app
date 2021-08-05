//function for the submit button
const submitFunction = () => {
    const submitBttn = document.getElementById('submit');

    submitBttn.addEventListener('click', (e) => {
        e.preventDefault();

        Promise.all([MyLib.weatherCall(), MyLib.pixCall()])
            .then(data => MyLib.postData('http://localhost:3080/allCurrentData', { values: data }))
    })
}
export { submitFunction }