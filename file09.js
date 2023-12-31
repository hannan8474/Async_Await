const todos = async () => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos/");
        return response.data;
    }
    catch (err) {
        console.error("Error fetching data: ", err.message);
    }
}
todos().then(data => {
    console.log(data)
});