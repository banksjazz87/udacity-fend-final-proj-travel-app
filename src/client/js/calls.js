//A generic function to return the various api information

async function callForApi(url, key, data) {
    const response = await fetch(url + key);

    try {
        const res = await (response.json());
        console.log(res);
    } catch (e) {
        console.log(error);
    }
}

export { callForApi }