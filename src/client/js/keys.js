async function keysInfo() {
    let response = await fetch("http://localhost:3080/keyData");
    try {
        const res = await (response.json());
        MyLib.geonamesApi(res.geonames);
    } catch (e) {
        console.log("error", e)
    }
}

export { keysInfo }