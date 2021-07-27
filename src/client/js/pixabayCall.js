//Function that returns a series of other functions to ultimately return an image to the UI
const pixCall = () => {
    MyLib.keysInfo()
        .then(data => pixabayApi(data.pixabay, data.pixabayUrl, MyLib.newOptions.place))

}

export { pixCall }

const pixabayApi = async(key, url, place) => {

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

//Return an image
const checkForZero = (value) => {
    if (value === 0) {
        MyLib.keysInfo()
            .then(data => pixabayApi(data.pixabay, data.pixabayUrl, MyLib.newOptions.country))
    }
}