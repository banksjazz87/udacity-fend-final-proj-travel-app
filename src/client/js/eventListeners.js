/**
 *@description an eventListener for the search button. The function gets the geoNames info after recieving the data from the keysInfo function.
 @returns if successful, returns an updated UI with an options menu for the user to select a location, supplied from the geonames api. If unsuccessful, an alert box will pop up, requesting the user to enter a valid destination.
 */

const returnGeo = () => {
    const searchButton = document.getElementById('search');

    const userInput = document.getElementById('destination');

    searchButton.addEventListener('click', (e) => {
        e.preventDefault();

        if (userInput.value === "") {
            alert("Please enter a destination.")
        } else {
            MyLib.clearOptions();
            MyLib.keysInfo()
                .then(data => MyLib.geonamesApi(data.geonames, data.geoUrl))
        }
    });
}

/**
 * @description this is an event listener for the final submit button.
 * @returns an updated UI, displaying the trip length, location, all of the weather info for the duration of the trip, and a picture of the location.  If a picture of the location isn't accessible, it will return a picture pertaining to the country.
 */

const submitFunction = () => {
    const submitBttn = document.getElementById('submit');

    submitBttn.addEventListener('click', (e) => {
        e.preventDefault();

        MyLib.clearItems('card', 'img', 'p');

        Promise.all([MyLib.weatherCall(), MyLib.pixCall()])
    })
}

/**
 * @description event listener for the clear button.
 * @returns an updated UI, where everything is removed from the DOM, with the exception of the first input field.
 */

const clearFunction = () => {
    const clearButton = document.getElementById('clear');

    document.querySelector('footer').style.opacity = '0';

    clearButton.addEventListener('click', (e) => {
        e.preventDefault();
        MyLib.clearOptions();

        const destination = document.getElementById('destination');
        destination.value = null;
    });
}

export { clearFunction, submitFunction, returnGeo }