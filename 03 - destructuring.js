const user = {
    firstname: 'Matheus',
    lastname: 'Kamer',
    mail: 'matheus_kamer@hotmail.com',
    age: 27,
    skills: ['React', 'React-native', 'Node.js'],
}

const { firstname, lastname, skills} = user;
const [primary, secundary] = skills;

console.log({firstname}, {secundary});
