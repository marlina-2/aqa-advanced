function fetchTodo() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .catch(error => console.error('Error in GET todo:', error));
}

function fetchUser() {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.json())
        .catch(error => console.error('Error in GET user:', error));
}

Promise.all([fetchTodo(), fetchUser()])
    .then(([todo, user]) => {
        console.log('Promise.all:', {todo, user});
    })
    .catch(error => console.error('Error in: Promise.all:', error));

Promise.race([fetchTodo(), fetchUser()])
    .then(result => {
        console.log('Promise.race:', result);
    })
    .catch(error => console.error('Error in Promise.race:', error));
