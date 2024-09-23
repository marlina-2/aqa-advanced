class TodoRequest {
    async fetchTodo() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
            return await response.json();
        } catch (error) {
            console.error('Error in GET todo:', error);
            throw error;
        }
    }
}

class UserRequest {
    async fetchUser() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
            return await response.json();
        } catch (error) {
            console.error('Error in GET user:', error);
            throw error;
        }
    }
}

(async function () {
    const todoRequest = new TodoRequest();
    const userRequest = new UserRequest();
    try {
        const [todo, user] = await Promise.all([todoRequest.fetchTodo(), userRequest.fetchUser()]);
        console.log('Promise.all:', {todo, user});

        const raceResult = await Promise.race([todoRequest.fetchTodo(), userRequest.fetchUser()]);
        console.log('Promise.race:', raceResult);
    } catch (error) {
        console.error('Error:', error);
    }
})();
