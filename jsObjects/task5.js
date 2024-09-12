const users = [
    {name: "Ivan", email: "11111@df.fd", age: 15},
    {name: "Petro", email: "2222@df.fd", age: 26},
    {name: "Olena", email: "3333@df.fd", age: 36}
]

for (const {name, email, age} of users) {
    console.log(`Name: ${name}, email: ${email}, age: ${age}`);
}
