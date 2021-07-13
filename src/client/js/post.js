const postData = async(url = " ", data = {}) => {
    const resposne = await fetch(url, {
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
    } catch (error) {
        console.log('eror', error);
    }
}

export { postData }