const user = {
    firstname: 'Matheus',
    lastname: 'Kamer',
    mail: 'matheus_kamer@hotmail.com',
    age: 27,
    skills: ['React', 'React-native', 'Node.js'],
}

const { firstname, lastname, skills, ...rest} = user;
const [primary, ...restSkill] = skills;

console.log(rest, {restSkill});