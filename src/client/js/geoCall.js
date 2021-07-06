//A generic function to return the various api information

async function geonamesApi(key) {
    let currentValue = document.getElementById('destination');

    const response = await fetch("http://api.geonames.org/searchJSON?q=" + currentValue.value + "&maxRows=10&username=" + key);

    try {
        const res = await (response.json());
        console.log(res);
    } catch (e) {
        console.log(error);
    }
}

export { geonamesApi }