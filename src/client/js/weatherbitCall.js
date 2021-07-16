import { newOptions } from "./geoCall";

const weatherbit = async(key, lat, long) => {
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


//This function is an event listener on the start date input, and sets the newOptions object to the new values, set by the user

const startDate = (element) => {

    let wantedDate = document.getElementById(element);

    wantedDate.addEventListener('change', () => {

        //Set the start month value
        MyLib.newOptions.startMonth = wantedDate.value[5] + wantedDate.value[6];

        //Set the start day value
        MyLib.newOptions.startDay = wantedDate.value[8] + wantedDate.value[9];

        console.log(MyLib.newOptions);
    });
}

export { startDate };

//This function will set the endMonth and endDay values for the newOptions object
const endDate = (element) => {

    let wantedDate = document.getElementById(element);
    wantedDate.addEventListener('change', () => {

        //sets the endMonth value
        MyLib.newOptions.endMonth = wantedDate.value[5] + wantedDate.value[6];

        //sets the end day value
        MyLib.newOptions.endDay = wantedDate.value[8] + wantedDate.value[9];

        console.log(MyLib.newOptions);
    })
}

export { endDate };