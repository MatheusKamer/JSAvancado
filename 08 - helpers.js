const tech = 'Node.js'
const array = ['Node.js', 'React', 'React native', 'Typescript'];

/* includes serve para verificar se a string possui esses caracteres em sua composição(case sensitive / necessário estar na ordem certa) */
const includesTech = tech.includes('de.j');
console.log({includesTech});

/* Funciona também com array, mas é necessário estar com o nome correto, ex: "Node.js" e não apenas "Node" */
const arrayTech = array.includes('Node');
console.log({arrayTech});

/* startsWich verifica se o valor inicia com o que é passado */
const startsWich = tech.startsWith('No');
console.log({startsWich});

/* endsWich verifica se o valor termina com o que é passado */
const endsWich = tech.endsWith('js');
console.log({endsWich});
