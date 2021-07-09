let currentOptions = [];

let newOptions = { key: "" };


//A generic function to return the various api information

async function geonamesApi(key) {
    let currentValue = document.getElementById('destination');

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
        console.log(currentOptions);
        displayedGeo(currentOptions);
    } catch (error) {
        console.log('error', error);
    }
}
export { geonamesApi }


//function to return the info from the geonamesApi to the DOM
function displayedGeo(data) {

    //removePrevious();

    const select = document.createElement('select');
    const selectContainer = document.getElementById('select_location');
    selectContainer.appendChild(select);

    let arr = [];

    for (let i = 0; i < data.length; i++) {
        let place = "LOCATION: " + Object.values(data[i].place).join('');
        let state = "STATE: " + Object.values(data[i].state).join('') + ",";
        let country = "COUNTRY: " + Object.values(data[i].country).join('');

        let options = document.createElement('option');
        options.textContent = place + " " + state + " " + country;

        select.appendChild(options);
    }
    select.addEventListener('change', (e) => {
        console.log(e.target.value);
    })
}

//Clear past options
function clearOptions() {
    /*let currentOptions = document.querySelectorAll('option');
    let optionsParent = document.querySelector('select');

    while (currentOptions.length > 0) {
        optionsParent.removeChild(currentOptions);
    }*/
    const selectMenu = document.querySelector('select');

    if (selectMenu) {
        selectMenu.remove()
        currentOptions = [];
    }
}

export { clearOptions }