//Function that returns a series of other functions to ultimately return an image to the UI
const pixCall = () => {
    MyLib.keysInfo()
        .then(data => pixabayApi(data.pixabay, data.pixabayUrl, MyLib.newOptions.place))
        .then(data => checkForZero(data, "totalHits", "hits", "fullHDURL"))

}

export { pixCall }

const pixabayApi = async(key, url, place) => {
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
        pixIndex(value[arr][3][url]);

    } else {
        MyLib.keysInfo()
            .then(data => pixabayApi(data.pixabay, data.pixabayUrl, MyLib.newOptions.country))
            .then(data => pixIndex(data["hits"][3]["fullHDURL"]))
    }
}

//Function to return an image to the UI
const pixabayPic = (value) => {
    const container = document.getElementById('location_pic');

    const pic = document.createElement('img');
    pic.setAttribute('src', value);
    pic.setAttribute('id', 'pixabay_pic');

    container.appendChild(pic);
}

//create a new index for the image url
const pixIndex = (value) => {
    MyLib.newOptions.picUrl = value;
    pixabayPic(value);
}