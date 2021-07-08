let currentOptions = [];


//A generic function to return the various api information

async function geonamesApi(key) {
    let currentValue = document.getElementById('destination');

    const response = await fetch("http://api.geonames.org/searchJSON?q=" + currentValue.value + "&maxRows=10&username=" + key);

    try {
        const res = await (response.json());
        console.log(res);
        console.log(res.geonames);
        for (let i = 0; i < res.geonames.length; i++) {

            let newOptions = {
                key: i,
                place: Object.values(res.geonames[i].toponymName),
                state: Object.values(res.geonames[i].adminName1),
                country: Object.values(res.geonames[i].countryName),
                lat: Object.values(res.geonames[i].lat),
                long: Object.values(res.geonames[i].lng)
            }
        }
        currentOptions.push(newOptions);
        console.log(currentOptions);
        displayedGeo(res.geonames);
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
        let place = "LOCATION: " + Object.values(data[i].name).join('');
        let state = "STATE: " + Object.values(data[i].adminName1).join('') + ",";
        let country = "COUNTRY: " + Object.values(data[i].countryName).join('');

        let options = document.createElement('option');
        options.textContent = place + " " + state + " " + country;

        select.appendChild(options);
    }
    select.addEventListener('change', (e) => {
        console.log(e.target.value);
    })
}

//Remove options when a new destination is entered

function removePrevious() {
    const select = document.querySelector('select');

    if (select) {
        let option = document.querySelector('option');
        while (select.length > 0) {
            select.removeChild(option)
        }
    }
}