async function fetchTodo() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        return await response.json();
    } catch (error) {
        console.error('Error in GET todo:', error);
        throw error;
    }
}

async function fetchUser() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        return await response.json();
    } catch (error) {
        console.error('Error in GET user:', error);
        throw error;
    }
}

(async function () {
    try {
        const [todo, user] = await Promise.all([fetchTodo(), fetchUser()]);
        console.log('Promise.all:', {todo, user});

        const raceResult = await Promise.race([fetchTodo(), fetchUser()]);
        console.log('Promise.race:', raceResult);
    } catch (error) {
        console.error('Error:', error);
    }
})();
