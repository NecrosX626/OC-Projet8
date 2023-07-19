function FetchData() {
    return fetch("http://localhost:3000/locationsData.json")
        .then((response) => response.json())
}

export default FetchData;