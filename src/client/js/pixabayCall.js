//Function that returns a series of other functions to ultimately return an image to the UI
const pixCall = () => {
    MyLib.keysInfo()
        .then(data => pixabayApi(data.pixabay, data.pixabayUrl, MyLib.newOptions.place))
        .then(data => checkForZero(data.totalHits))
        //.then(data => console.log("!!!!" + data[0]))
        //.then(data => pixabayPic(data[hits][0][fullHDURL]))

}

export { pixCall }

const pixabayApi = async(key, url, place, country) => {

    //let description = arr.join('+').toString();

    const response = await fetch(url + key + "&q=" + place + "&image_type=photo");

    try {
        let data = await response.json();
        console.log(data);
        return data;
    } catch (e) {
        console.log('error', e);
    }
}

//Check to see if no image has been found for the location.
const checkForZero = (value) => {
    if (value === 0) {
        MyLib.keysInfo()
            .then(data => pixabayApi(data.pixabay, data.pixabayUrl, MyLib.newOptions.country))
            .then(data => console.log("!!!!!!!" + data))
            //pixabayPic(data.hits[0][fullHDURL]))
            /*} else {
                pixabayPic("valid pic on first try" + data);
                //.hits[0][fullHDURL]);*/
    }
}

//Function to return an image to the UI
const pixabayPic = (value) => {
    const container = document.getElementById('location_pic');

    const pic = document.createElement('img');
    pic.setAttribute('src', value);

    container.appendChild(pic);
}