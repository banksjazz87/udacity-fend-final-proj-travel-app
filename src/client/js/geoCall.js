//An array to hold the current options that have been retrieved from the api
let currentOptions = [];

//An empty object, to serve as a placeholder for the values that we want to retrieve
let newOptions = {
    key: '',
    place: '',
    state: '',
    lat: '',
    long: '',
    date: ''
}

//A generic function to return the various api information
const geonamesApi = async(key) => {
    let currentValue = document.getElementById('destination');
    /*let currentOptions = [];
    let newOptions = { key: '' };*/
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
                long: Object.values(res.geonames[i].lng).join('')
            }
            currentOptions.push(newOptions);
        }
        console.log('current options = ', currentOptions)
        console.log('newOptions = ', newOptions);
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

        console.log(arr.join(''));
    })
}

export { displayedGeo }

//Clear past options
const clearOptions = () => {
    const selectMenu = document.querySelector('select');

    if (selectMenu) {
        selectMenu.remove()
    }
}

export { clearOptions }