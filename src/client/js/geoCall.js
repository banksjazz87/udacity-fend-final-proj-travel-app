//An array to hold the current options that have been retrieved from the api
let currentOptions = [];

export { currentOptions }

//An empty object, to serve as a placeholder for the values that we want to retrieve
let newOptions = {}

export { newOptions }

//Function to get the geoNames info after getting the keysInfo
const returnGeo = () => {
    const searchButton = document.getElementById('search');

    searchButton.addEventListener('click', () => {
        MyLib.clearOptions();
        MyLib.keysInfo()
            .then(data => MyLib.geonamesApi(data.geonames))
    });
}
export { returnGeo }

//A function to return the geonames api information
const geonamesApi = async(key) => {
    let currentValue = document.getElementById('destination');

    currentOptions = [];

    const response = await fetch("http://api.geonames.org/searchJSON?q=" + currentValue.value + "&maxRows=20&username=" + key);

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
        console.log('error', error);
    }
}
export { geonamesApi }


//function to return the info from the geonamesApi to the DOM
const displayedGeo = (data) => {

    const select = document.createElement('select');
    const selectContainer = document.getElementById('select_location');
    selectContainer.appendChild(select);

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

        MyLib.postData("http://localhost:3080/currentUserData", { key: currentOptions.key, place: currentOptions.place, state: currentOptions.state, country: currentOptions.country, lat: currentOptions.lat, long: currentOptions.long, date: "" })
    })
}
export { displayedGeo }

//Clear past options
const clearOptions = () => {
    const selectMenu = document.querySelector('select');

    if (selectMenu) {
        selectMenu.remove()
    }

    const dates = document.getElementById('date_input');
    dates.style.display = 'none';
}
export { clearOptions }

const showDateInput = () => {
    const dates = document.getElementById('date_input');

    if (dates.style.display === 'none') {
        dates.style.display = 'flex';
    }
}