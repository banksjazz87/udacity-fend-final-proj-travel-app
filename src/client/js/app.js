async function keysInfo() {
    let response = await fetch("http://localhost:3080/keyData");
    try {
        const res = await (response.json());
        //return res;
        MyLib.geonamesApi(res.geonames)
            .then(MyLib.weatherbit(
                res.weatherbit,
                MyLib.newOptions.lat,
                MyLib.newOptions.long,
                MyLib.newOptions.startMonth,
                MyLib.newOptions.startDay,
                MyLib.newOptions.endMonth,
                MyLib.newOptions.endDay))
    } catch (e) {
        console.log("error", e)
    }
}

export { keysInfo }