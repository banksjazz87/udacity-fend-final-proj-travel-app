/**
 * @description this is the function that will be called in order to return the key data for each api that is called.  The data will be pulled from the server.
 * @returns an object of all the key data for the apis used in this project.
 */

async function keysInfo() {
    let response = await fetch("/keyData");
    try {
        const res = await (response.json());
        return res;
    } catch (e) {
        console.log("error", e)
    }
}
export { keysInfo }