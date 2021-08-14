//An array to hold the current options that have been retrieved from the api
let currentOptions = [];

export { currentOptions }

//An empty object, to serve as a placeholder for the values that we want to retrieve
let newOptions = {}

export { newOptions }

//Function to get the geoNames info after getting the keysInfo
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
export { returnGeo }

//A function to return the geonames api information
const geonamesApi = async(key, url) => {
    let currentValue = document.getElementById('destination');

    currentOptions = [];

    const response = await fetch(url + currentValue.value + "&maxRows=20&username=" + key);

    try {
        const res = await (response.json());
        console.log(res);
        console.log(res.geonames);
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
export { geonamesApi }


//function to return the info from the geonamesApi to the DOM
const displayedGeo = (data) => {
    const select = document.createElement('select');
    const selectContainer = document.getElementById('select_location');
    selectContainer.appendChild(select);

    let headerOfOptions = document.createElement('option');
    headerOfOptions.textContent = "Please choose from one of the following...";
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
export { displayedGeo }

//Clear: past options, destination input and dates
const clearOptions = () => {
    const dates = document.getElementById('date_input');
    dates.style.display = 'none';

    MyLib.clearItems('card', 'img', 'select', 'p');
}
export { clearOptions }

//function that displays the date input
const showDateInput = () => {
    const dates = document.getElementById('date_input');

    if (dates.style.display === 'none') {
        dates.style.display = 'flex';
    }
}

//function that will remove all items of the same kind
const clearItems = (...args) => {

    for (let i = 0; i < args.length; i++) {
        let items = document.querySelectorAll(args[i]);

        for (let j = 0; j < items.length; j++) {
            items[j].remove();
        }
    }
}

export { clearItems }