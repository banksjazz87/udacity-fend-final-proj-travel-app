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

    for (let i = 0; i <= 5; i++) {
        arr.push(wantedDate.value[i]);
    }

    let month = arr.slice(0, 1);
    let day = arr.slice(3, 4);

    console.log("month = " + arr[] + "day = " + day);
}

export { returnDates };

const leadingZero = (num) => {

    if (num.length === 1) {
        let numString = num.toString();
        let newNum = "0" + numString;
    }
    console.log(newNum);
}