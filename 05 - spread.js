const user = {
    firstname: 'Matheus',
    lastname: 'Kamer',
    mail: 'matheus_kamer@hotmail.com',
    age: 27,
    skills: ['React', 'React-native', 'Node.js'],
    active: true,
}

const newUser = {
    ...user,
    skills: [...user.skills, 'Typescript'],
    active: false,
}

console.log(user);
console.log(newUser);