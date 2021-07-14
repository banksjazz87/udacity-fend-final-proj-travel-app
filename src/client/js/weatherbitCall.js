const weatherbit = async(key, lat, long, start, end) => {
    let start = document.getElementById('start_date');
    let end = document.getElementById('end_date');

    const response = await fetch("https://api.weatherbit.io/v2.0/normals?lat=" + lat + "&lon=" + long + "&start_day=+" + start + "&end_day=" + end + "&tp=daily&key=" + key);

    try {
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log('error', error);
    }
}

export { weatherbit }