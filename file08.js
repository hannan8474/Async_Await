const todos = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
    const data = await response.json();

    return data;
};

todos().then (data => {
    console.log(data);
});