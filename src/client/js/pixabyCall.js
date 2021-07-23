const pixabyApi = async(key, description) => {
    const response = await fetch("https://pixabay.com/api/?key=" + key + "&q=" + description + "&image_type=photo");

    try {
        let data = response.json();
        console.log(data);
    } catch (e) {
        console.log('error', e);
    }
}