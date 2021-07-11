//A generic function to return the various api information

const geonamesApi = async(key) => {
    let currentValue = document.getElementById('destination');
    let currentOptions = [];
    let newOptions = { key: '' };

    const response = await fetch("http://api.geonames.org/searchJSON?q=" + currentValue.value + "&maxRows=10&username=" + key);

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
        let place = "LOCATION: " + Object.values(data[i].place).join('');
        let state = "STATE: " + Object.values(data[i].state).join('') + ",";
        let country = "COUNTRY: " + Object.values(data[i].country).join('');

        let options = document.createElement('option');
        options.textContent = optionNum + "." + place + " " + state + " " + country;

        select.appendChild(options);
    }
    select.addEventListener('change', (e) => {
        console.log(e.target.value[0]);
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