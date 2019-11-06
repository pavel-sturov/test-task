async function request(url) {
    let req = await fetch(url, {
        method: 'GET',
        mode: 'cors',
    });
    if (req.ok) {
        return await req.json();
    } else {
        console.log('Something goes wrong!');
    }
}

export default request;