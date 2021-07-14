const weatherbit = async(key) => {
    const response = await fetch("https://api.weatherbit.io/v2.0/normals?lat=38.0&lon=-78.0&start_day=02-02&end_day=03-01&tp=daily&key=" + key);

    try {
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log('error', error);
    }
}

export { weatherbit }