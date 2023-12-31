const getSomething = () => {
    return new Promise((resolve, reject) => {
        //fetch something
        resolve("Promise resolved");
        // reject("Promise rejected");
    })
}

getSomething().then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});