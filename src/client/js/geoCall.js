//An array to hold the current options that have been retrieved from the api
let currentOptions = [];

//An empty object, to serve as a placeholder for the values that we want to retrieve
let newOptions = {}

/**
 * 
 * @param {*} key 
 * @param {*} url 
 * @description this is an asynchronous fetch api call that is made to the geonames Api
 * @returns data for the newOptions object and pushes it into the currentOptions array, and then calls the diplayedGeo() function.  If there is an error while retrieving the info API, an alert box appears and prompts the user to try a more detailed location.
 */
const geonamesApi = async(key, url) => {
    let currentValue = document.getElementById('destination');

    currentOptions = [];

    const response = await fetch(url + currentValue.value + "&maxRows=20&username=" + key);

    try {
        const res = await (response.json());

        for (let i = 0; i < res.geonames.length; i++) {

            newOptions = {
                key: i,
                place: Object.values(res.geonames[i].toponymName).join(''),
                state: Object.values(res.geonames[i].adminName1).join(''),
                country: Object.values(res.geonames[i].countryName).join(''),
                lat: Object.values(res.geonames[i].lat).join(''),
                long: Object.values(res.geonames[i].lng).join(''),

            }
            currentOptions.push(newOptions);
        }

        displayedGeo(currentOptions);

    } catch (error) {
        alert('Please type a more specific location and try again.')
        console.log('error', error);
    }
}

/**
 * 
 * @param {*} data 
 * @description this function will take the data from the geonames api call and then return a select element along with 20 options as children, and also adds an onchange event listener to the options, and then stores the data that the user has selected.
 * @return updates the UI with a dropdown option bar of 20 different options, each option will have a change event listener applied to it.  And then calls the showDate() function, which will show the two date inputs along with the submit and clear buttons. The select element is removes, so the user can only use the location that they have selected.
 */
const displayedGeo = (data) => {
    const select = document.createElement('select');
    const selectContainer = document.getElementById('select_location');
    selectContainer.appendChild(select);


    let headerOfOptions = document.createElement('option');
    headerOfOptions.textContent = "Please select from the following...";
    select.appendChild(headerOfOptions);

    for (let i = 0; i < data.length; i++) {
        let optionNum = i + 1;
        let place = "Location: " + Object.values(data[i].place).join('').toUpperCase();
        let state = "State: " + Object.values(data[i].state).join('').toUpperCase();
        let country = "Country: " + Object.values(data[i].country).join('').toUpperCase();

        let options = document.createElement('option');

        options.textContent = optionNum + ". " + place + "  " + state + "  " + country;

        select.appendChild(options);
    }

    select.addEventListener('change', (e) => {

        let choice = Object.values(e.target.value).join("");

        let i = 0;
        let arr = [];

        while (parseInt(choice[i])) {
            arr.push(choice[i]);
            i++;
        }

        let choiceResults = currentOptions[arr.join('') - 1]

        //Change value of the main object
        newOptions.key = choiceResults.key,
            newOptions.place = choiceResults.place,
            newOptions.state = choiceResults.state,
            newOptions.country = choiceResults.country,
            newOptions.lat = choiceResults.lat,
            newOptions.long = choiceResults.long,

            //Clear and then update the value of the main array.
            currentOptions = [];
        currentOptions.push(newOptions);

        showDateInput();
        clearItems('select');
    })
}

/**
 * @details this function will clear everything but the main input box.
 * @return returns the start screen.
 */
const clearOptions = () => {
    const dates = document.getElementById('date_input');
    dates.style.display = 'none';

    removeDiv('locationPic');
    MyLib.clearItems('card', 'img', 'select', 'p');
}

/**
 * @details function that determines if the date input should be displayed or not.
 * @returns either returns a displayed date input field, or removes it.
 */
const showDateInput = () => {
    const dates = document.getElementById('date_input');

    if (dates.style.display === 'none') {
        dates.style.display = 'flex';
    }
}

/**
 * 
 * @param  {...any} args 
 * @details takes on one or more parameters used to find all instances of the element/class/etc.
 * @returns removes listed parameters from the DOM.
 */
const clearItems = (...args) => {

    for (let i = 0; i < args.length; i++) {
        let items = document.querySelectorAll(args[i]);

        for (let j = 0; j < items.length; j++) {
            items[j].remove();
        }
    }
}

/**
 * 
 * @param {*} name 
 * @details takes the name of a potential id for a div, and checks to see if the div exists, if it exists, the div will be removed, otherwise, nothing will happen.
 * @returns removes listed div from the DOM.
 */
const removeDiv = (name) => {
    if (document.getElementById(name)) {
        let div = document.getElementById(name);
        div.remove();
    }
}

export { currentOptions, newOptions, geonamesApi, displayedGeo, clearOptions, clearItems }