fetch ("https://jsonplaceholder.typicode.com/todos/").then ((response) => {
    console.log("Resolved:", response); // This is not giving us the actual data but giving us the JSON, to get the actual data we will parse it but not by previous method because in this case it is a promise and promise only resolves or rejects
    return response.json(); // this is called promise chainging also used for more than one requests, this can be done by async await
}).then(data => {
    console.log("Resolved: ", data);
}).catch ((err) => { //This error will only reject those requests which are due to network issues
    console.log("Rejected:", err);
});