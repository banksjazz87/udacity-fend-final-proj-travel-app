/**
 * 
 * @param {*} url 
 * @param {*} data 
 * @details this is a generic post function, just to help make it easier to plug in the needed url string and data object to send a post request to the server.
 * @returns post request to the server.
 */
const postData = async(url = " ", data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    });
    try {
        const newData = await response.json();
        return newData;
    } catch (error) {
        console.log('eror', error);
    }
}

export { postData }