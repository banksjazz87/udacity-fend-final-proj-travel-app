/**
 * @description this function is referring to all of the other functions that will be called, and firing off a series of promises which ultimately returns an update DOM with the data from the weather api that I am using.
 */
const weatherCall = () => {
    MyLib.startDate('start_date');
    MyLib.endDate('end_date');

    MyLib.keysInfo()
        .then(data => MyLib.weatherbit(
            data.visCrossKey,
            data.visCrossUrl,
            MyLib.newOptions.lat,
            MyLib.newOptions.long,
            MyLib.newOptions.startDate,
            MyLib.newOptions.endDate
        ))
        .then(res => saveWeatherData('tempmax', 'tempmin', 'precip', 'snow', 'datetime', 'clouds', res.days))
        .then(res => createWeatherCard('month', 'day', 'highTemp', 'lowTemp', 'precip', 'snow', res.weatherInfo))
}

/**
 * 
 * @param {*} key 
 * @param {*} url 
 * @param {*} lat 
 * @param {*} long 
 * @param {*} start 
 * @param {*} end 
 * @returns async fetch call that returns data from the weatherbit API, although, I ended up using the visual crossing API.
 */
const weatherbit = async(key, url, lat, long, start, end) => {
    const response = await fetch(url + lat + "," + long + "/" + start + "/" + end + "?key=" + key);

    try {
        const data = await response.json();
        console.log("weather", data)
        return data;
    } catch (error) {
        console.log('error', error);
    }
}

/**
 * 
 * @param {*} element, id value.
 * @details takes the value selected by the user. 
 * @returns an updated newOptions object with a startMonth, startDay, startDate
 */
const startDate = (element) => {
    let wantedDate = document.getElementById(element);

    MyLib.newOptions.startMonth = wantedDate.value[5] + wantedDate.value[6];
    MyLib.newOptions.startDay = wantedDate.value[8] + wantedDate.value[9];

    MyLib.newOptions.startDate = wantedDate.value;

    return MyLib.newOptions.startDate;

}

/**
 * 
 * @param {*} element, id value.
 * @details takes the value selected by the user. 
 * @returns an updated newOptions object with a startMonth, startDay, startDate
 */
const endDate = (element) => {
    let wantedDate = document.getElementById(element);

    MyLib.newOptions.endMonth = wantedDate.value[5] + wantedDate.value[6];
    MyLib.newOptions.endDay = wantedDate.value[8] + wantedDate.value[9];
    MyLib.newOptions.endDate = wantedDate.value;

    return MyLib.newOptions.endDate;
}

/**
 * 
 * @param {*} high 
 * @param {*} low 
 * @param {*} precipitation 
 * @param {*} snow 
 * @param {*} date 
 * @param {*} clouds 
 * @param {*} arr 
 * @details Takes the data from the weather api and creates a new array in the newOptions object, all of the data is stored with a new object key.
 * @returns updated newOptions object with an array of data for each day on vacation.
 */
const saveWeatherData = (high, low, precipitation, snow, date, clouds, arr) => {
    MyLib.newOptions.weatherInfo = [];

    for (let i = 0; i < arr.length; i++) {
        let currentVal = arr[i];

        let weather = {
            highTemp: currentVal[high],
            lowTemp: currentVal[low],
            precip: currentVal[precipitation],
            clouds: currentVal[clouds],
            snow: currentVal[snow],
            date: currentVal[date],
            month: currentVal[date][5] + currentVal[date][6],
            day: currentVal[date][8] + currentVal[date][9]
        }
        MyLib.newOptions.weatherInfo.push(weather);
    }
    //Push new object material to the main array
    MyLib.currentOptions.push(MyLib.newOptions);

    //Remove the previous object material from the array, to avoid unnecessary duplication
    MyLib.currentOptions.splice(0, 1);

    return MyLib.newOptions;
}

/**
 * 
 * @param {*} month 
 * @param {*} day 
 * @param {*} high 
 * @param {*} low 
 * @param {*} precip 
 * @param {*} snow 
 * @param {*} weatherArr 
 * @details takes the newly stored weather data and creates a new card element with the date, weather image, and forecasted high and low temperatures.
 * @returns an updated DOM with the weather data being displayed.
 */
const createWeatherCard = (month, day, high, low, precip, snow, weatherArr) => {

    //First, return the value of the location and trip length
    MyLib.tripLength(MyLib.newOptions.startDate, MyLib.newOptions.endDate)

    const weatherContainer = document.getElementById('weather');

    for (let i = 0; i < weatherArr.length; i++) {

        const newCard = document.createElement('card');
        const cardHeader = document.createElement('h2');
        cardHeader.textContent = weatherArr[i][month] + '/' + weatherArr[i][day];
        newCard.appendChild(cardHeader);

        const img = document.createElement('img');

        if (parseFloat(weatherArr[i][precip]) > .1 && weatherArr[i][snow] === 0) {

            img.setAttribute('src', MyLib.rain);

        } else if (parseFloat(weatherArr[i][precip]) < .1 && parseFloat(weatherArr[i][precip] > 0.01) && parseFloat(weatherArr[i][snow]) === 0) {

            img.setAttribute('src', MyLib.cloudy);

        } else if (parseFloat(weatherArr[i][snow]) > 0) {

            img.setAttribute('src', MyLib.snow);

        } else {

            img.setAttribute('src', MyLib.sunny);
        }

        newCard.appendChild(img);

        const highParagraph = document.createElement('p');
        highParagraph.textContent = 'High of: ' + weatherArr[i][high];
        newCard.appendChild(highParagraph);

        const lowParagraph = document.createElement('p');
        lowParagraph.textContent = 'Low of ' + weatherArr[i][low];
        newCard.appendChild(lowParagraph);

        weatherContainer.appendChild(newCard);

    }
    return MyLib.newOptions;
}

export { weatherbit, startDate, endDate, weatherCall }