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

const returnDates = (element) => {

    let wantedDate = document.getElementById(element);
    let arr = [];

    for (let i = 0; i < wantedDate.value.length; i++) {
        arr.push(wantedDate.value[i]);
    }

    let newMonth = arr.slice(5, 7);
    let newDay = arr.slice(8, 10);

    console.log("Newmonth = " + newMonth.join('') + "Newday = " + newDay.join(''));
}

export { returnDates };