function request(url) {
    return fetch(url)
        .then(response => {
            return response.json();
        })
        .then((data) => data.data)
        .catch((error) => {
            console.log(error);
        });
}

export default request;