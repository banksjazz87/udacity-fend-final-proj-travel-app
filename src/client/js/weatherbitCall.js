//Fetch call for the weatherbit api

const weatherbit = async(key, lat, long, start, end) => {

    /*MyLib.startDate("start_date");
    MyLib.endDate("end_date");*/
    const response = await fetch("https://api.weatherbit.io/v2.0/normals?lat=" + lat + "&lon=" + long + "&start_day=" + start + "&end_day=" + end + "&units=I&tp=daily&key=" + key);

    try {
        const data = await response.json();
        //updateWeather(data);
        console.log(data);
    } catch (error) {
        console.log('error', error);
    }
    //console.log("https://api.weatherbit.io/v2.0/normals?lat=" + lat + "&lon=" + long + "&start_day=" + startMonth + startDay + "&end_day=" + endMonth + endDay + "&tp=daily&key=" + key)
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