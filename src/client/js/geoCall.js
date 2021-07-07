//A generic function to return the various api information

async function geonamesApi(key) {
    let currentValue = document.getElementById('destination');

    const response = await fetch("http://api.geonames.org/searchJSON?q=" + currentValue.value + "&maxRows=10&username=" + key);

    try {
        const res = await (response.json());
        console.log(res);
        displayedGeo(res.geonames);
    } catch (e) {
        console.log(error);
    }
}

export { geonamesApi }

//function to return the info from the geonamesApi to the DOM

function displayedGeo(data) {
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


        //The below code doesn't work, because the options don't actually exist in the dom, will need to run another loop and apply the even listener
        options.addEventListener('click', (e) => {
            console.log(e.target.value);
        })

        arr.push(place + " " + state + " " + country);
    }
    console.log(arr);

}