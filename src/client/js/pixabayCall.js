const pixabayApi = async(key, url, value) => {

    //let description = arr.join('+').toString();

    const response = await fetch(url + key + "&q=" + value + "&image_type=photo");

    try {
        let data = await response.json();
        console.log(data);
    } catch (e) {
        console.log('error', e);
    }
}

const pixCall = () => {
    MyLib.keysInfo()
        .then(data => pixabayApi(data.pixabay, data.pixabayUrl, MyLib.newOptions.place))
}

export { pixCall }