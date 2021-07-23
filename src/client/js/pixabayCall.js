const pixabayApi = async(key, arr) => {

    let description = arr.join('+').toString();

    const response = await fetch("https://pixabay.com/api/?key=" + key + "&q=" + description + "&image_type=photo");

    try {
        let data = response.json();
        console.log(data);
    } catch (e) {
        console.log('error', e);
    }
}

const pixCall = () => {
    MyLib.keysInfo()
        .then(data => pixabayApi(data.pixabay, [MyLib.newOptions.place, MyLib.newOptions.state, MyLib.newOptions.country]))
}

export { pixCall }