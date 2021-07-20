async function keysInfo() {
    let response = await fetch("http://localhost:3080/keyData");
    try {
        const res = await (response.json());
        //return res;
        MyLib.weatherbit(
            res.weatherbit,
            MyLib.newOptions.lat,
            MyLib.newOptions.long,
            MyLib.newOptions.startDate,
            MyLib.newOptions.endDate)
    } catch (e) {
        console.log("error", e)
    }
}

export { keysInfo }