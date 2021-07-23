//Fetch call for the weatherbit api
const weatherbit = async(key, lat, long, start, end) => {
    const response = await fetch("https://api.weatherbit.io/v2.0/normals?lat=" + lat + "&lon=" + long + "&start_day=" + start + "&end_day=" + end + "&units=I&tp=daily&key=" + key);

    try {
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('error', error);
    }
}
export { weatherbit }

//Update the UI with the weather info
const updateWeather = (current) => {
    const container = document.getElementById('weather');

    const output = document.createElement('h1');
    output.textContent = current;

    container.appendChild('output');
}


//This function is an event listener on the start date input, and sets the newOptions object to the new values, set by the user
const startDate = (element) => {
    let wantedDate = document.getElementById(element);

    MyLib.newOptions.startMonth = wantedDate.value[5] + wantedDate.value[6];
    MyLib.newOptions.startDay = wantedDate.value[8] + wantedDate.value[9];
    MyLib.newOptions.startDate = MyLib.newOptions.startMonth + '-' + MyLib.newOptions.startDay;

}
export { startDate };

//This function will set the endMonth and endDay values for the newOptions object, along with an end date that joins both the endMonth with the endDay with a hyphen.
const endDate = (element) => {
    let wantedDate = document.getElementById(element);

    MyLib.newOptions.endMonth = wantedDate.value[5] + wantedDate.value[6];
    MyLib.newOptions.endDay = wantedDate.value[8] + wantedDate.value[9];
    MyLib.newOptions.endDate = MyLib.newOptions.endMonth + '-' + MyLib.newOptions.endDay;

}
export { endDate };

const weatherCall = () => {
    MyLib.startDate('start_date');
    MyLib.endDate('end_date');

    MyLib.keysInfo()
        .then(data => MyLib.weatherbit(
            data.weatherbit,
            MyLib.newOptions.lat,
            MyLib.newOptions.long,
            MyLib.newOptions.startDate,
            MyLib.newOptions.endDate
        ))
        .then(res => saveWeatherData('max_temp', 'min_temp', 'precip', 'snow', 'month', 'day', res.data))
}
export { weatherCall }

//Updates the newObjects array
const saveWeatherData = (high, low, precipitation, snow, month, day, arr) => {

    //let weatherContainer = [];
    MyLib.newOptions.weatherInfo = [];

    for (let i = 0; i < arr.length; i++) {
        let currentVal = arr[i];

        let weather = {
            highTemp: currentVal[high],
            lowTemp: currentVal[low],
            precip: currentVal[precipitation],
            snow: currentVal[snow],
            day: currentVal[day],
            month: currentVal[month]
        }
        MyLib.newOptions.weatherInfo.push(weather);
        //MyLib.NewOptions.weatherInfo.push(weather);
    }
    //Push new object material to the main array
    MyLib.currentOptions.push(MyLib.newOptions);

    //Remove the previous object material from the array, to avoid unnecessary duplication
    MyLib.currentOptions.splice(1);

    console.log(MyLib.newOptions);
    console.log(MyLib.currentOptions);
}