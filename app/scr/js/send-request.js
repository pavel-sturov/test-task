function request(url) {
    return fetch(url)
        .then(response => response.json())
        .then((data) => data.data)
        .catch((error) => {
            console.log(error);
        });
}

export default request;