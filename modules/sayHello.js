/* Antigo
module.exports = function sayHello(name) {
    console.log(`Hello ${name}`);
};
 */

/* ES module */

/* Usando só 'export' é necessário importar utilizando o nome correto da função, podendo renomear com "as", exemplo no index.js */
export function sayHello(name) {
    console.log(`Olá ${name}`);
}

const userName = ('Matheus');

export default userName;