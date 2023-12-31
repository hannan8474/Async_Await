const todos = (resource) => {
    return new Promise((resolve, reject) => {

        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText); // request.responseText looks like an object but it is actually a string to use this data we'll convert it into JSON and then use it.
                resolve(data);
            }
            else if (request.readyState === 4) {
                reject("Error getting response");
            }
        });
        request.open('GET', resource);
        request.send();
    });
}

todos("https://jsonplaceholder.typicode.com/todos/").then(data => {
    console.log("Promise resolved: ", data);
}).catch(err => {
    console.log(err);
});
