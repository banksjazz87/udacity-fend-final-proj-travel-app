/**
 * @description returns a series of promises that ultimately renders an impage to UI.
 * @returns image from pixabay to the UI.
 */
const pixCall = () => {
    MyLib.keysInfo()
        .then(data => pixabayApi(data.pixabay, data.pixabayUrl, [MyLib.newOptions.place, MyLib.newOptions.state, MyLib.newOptions.Country]))
        .then(data => checkForZero(data, "totalHits", "hits", "fullHDURL"))
}

/**
 * 
 * @param {*} key, data from the server.
 * @param {*} url, data from the server.
 * @param {*} place, data from the user's input.
 * @description this the main fetch call for the pixabay API.
 * @returns data from pixabay.
 */
const pixabayApi = async(key, url, place) => {

    //Need to use this to determine if there needs to be a plus sign included in the API call, for the destination.
    let addPlusSign = '';

    if (place.length === 1) {
        addPlusSign = place.toString();
    } else {
        addPlusSign = place.join('+').toString();
    }
    console.log(place.length);

    console.log((url + key + "&q=" + addPlusSign + "&image_type=photo"));
    const response = await fetch(url + key + "&q=" + place + "&image_type=photo");

    try {
        let data = await response.json();
        return data;
    } catch (e) {
        console.log('error', e);
    }
}

/**
 * 
 * @param {*} value 
 * @param {*} total 
 * @param {*} arr 
 * @param {*} url 
 * @description determines if an image is available from pixabay, that corresponds with the user's input.  Otherwise an image from the destination's country is returned.
 * @returns an image to the DOM, either one pertaining to the exacty location, or to the location's country, along with the pixabay icon.
 */
//Check to see if no image has been found for the location.
const checkForZero = (value, total, arr, url) => {
    if (value[total] > 0) {
        pixIndex(value[arr][0][url]);

    } else {
        MyLib.keysInfo()
            .then(data => pixabayApi(data.pixabay, data.pixabayUrl, [MyLib.newOptions.country]))
            .then(data => pixIndex(data["hits"][0]["fullHDURL"]))
    }
}

/**
 * 
 * @param {*} value, image href from the pixabay API 
 * @details a setTimeout function is called to time when a picture is added to the UI.
 * @returns renders the image from the pixabay API call and also renders the logo pic and link to the pixabay API.
 */
const pixabayPic = (value) => {
    const container = document.createElement('div');
    container.setAttribute('id', 'location_pic');

    const pic = document.createElement('img');
    pic.setAttribute('src', value);
    pic.setAttribute('id', 'pixabay_pic');
    container.appendChild(pic);

    const logo = document.createElement('img');
    logo.setAttribute('src', MyLib.logo);
    logo.setAttribute('id', 'logo_pic');
    container.appendChild(logo);

    const pixabayLink = document.createElement('a');
    pixabayLink.setAttribute('href', 'https://pixabay.com/');
    pixabayLink.setAttribute('target', 'blank');
    pixabayLink.appendChild(logo);
    container.appendChild(pixabayLink);

    setTimeout(() => {
        document.querySelector('body').appendChild(container);
    }, 1000);
}

/**
 * 
 * @param {*} value, href from the pixabay api call.
 * @returns an updated newOptions objecte, with a key of 'picUrl', along with the src value.
 */
const pixIndex = (value) => {
    MyLib.newOptions.picUrl = value;

    pixabayPic(value)

    MyLib.postData('http://localhost:3080/allCurrentData', MyLib.newOptions);
}

export { pixCall }