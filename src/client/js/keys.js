async function keysInfo() {
    let response = await fetch("http://localhost:3080/keyData");
    try {
        const res = await (response.json());
        console.log(res);
    } catch (e) {
        console.log("error", e)
    }
}

export { keysInfo }