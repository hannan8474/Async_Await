const todos = (resource, Callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText); // request.responseText looks like an object but it is actually a string to use this data we'll convert it into JSON and then use it.
            Callback(undefined, data);
        }
        else if (request.readyState === 4) {
            Callback("couldn't fetch response", undefined);
        }
    })
    request.open('GET', resource);
    request.send();
}

console.log(1);
console.log(1);
todos ("https://jsonplaceholder.typicode.com/todos/", (err, data) => { // This is called callback hell, to overcome this we used promises
    console.log(data);
    todos ("https://jsonplaceholder.typicode.com/todos/", (err, data) => {
        console.log(data);
        todos ("https://jsonplaceholder.typicode.com/todos/", (err, data) => {
            console.log(data);
        });
    });
});
console.log(2);
console.log(2);