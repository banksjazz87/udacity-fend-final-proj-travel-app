//Function that returns a series of other functions to ultimately return an image to the UI
const pixCall = () => {
    MyLib.keysInfo()
        .then(data => pixabayApi(data.pixabay, data.pixabayUrl, [MyLib.newOptions.place, MyLib.newOptions.state, MyLib.newOptions.Country]))
        .then(data => checkForZero(data, "totalHits", "hits", "fullHDURL"))

}

export { pixCall }

const pixabayApi = async(key, url, place) => {

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
        console.log(data);
        return data;
    } catch (e) {
        console.log('error', e);
    }
}

//Check to see if no image has been found for the location.
const checkForZero = (value, total, arr, url) => {
    if (value[total] > 0) {
        pixIndex(value[arr][0][url]);

    } else {
        MyLib.keysInfo()
            .then(data => pixabayApi(data.pixabay, data.pixabayUrl, [MyLib.newOptions.country]))
            .then(data => pixIndex(data["hits"][3]["fullHDURL"]))
    }
}

//Function to return an image to the UI
const pixabayPic = (value) => {
    const container = document.getElementById('location_pic');

    const pic = document.createElement('img');
    pic.setAttribute('src', value);
    pic.setAttribute('id', 'pixabay_pic');

    setTimeout(() => {
        container.appendChild(pic)
    }, 1000);
}

//create a new index for the image url
const pixIndex = (value) => {
    MyLib.newOptions.picUrl = value;

    pixabayPic(value)

    MyLib.postData('http://localhost:3080/allCurrentData', MyLib.newOptions);
}