const array = [
    { name: 'iPhone', price: 5000, quantity: 2 },
    { name: 'MacBook Pro', price: 20000, quantity: 1 },
    { name: 'Magic Mouse', price: 1000, quantity: 5 },
];

/* .find */
/* Retornar o elemento que corresponde com a condição */
const find = array.find((product) => product.name == 'MacBook Pro'); /* short syntax do arrow function */

console.log({ find });

/* .findIndex */
/* Retornar o Index do elemento que corresponde com a condição */
const findIndex = array.findIndex((product) => product.name == 'MacBook Pro');
console.log({ findIndex });

/* .some */
/* Retornar true ou false conforme a condição */
const some = array.some((product) => product.price > 1000);

console.log({some});

/* .every */
/* Retornar true ou false apenas se todos os elementos corresponderem com a condição */
const every = array.every((product) => product.price > 999);
console.log({ every });

/* .map */
/* Retonar sempre um novo array com o mesmo número de posições do array de base (1 = 1) */
const map = array.map((product) => ({ /* short syntax para evitar o "return" */
        ...product,
        subtotal: product.price * product.quantity,
}));

console.log({ map });

/* .filter */
/* Retornar todos os elementos que se encaixarem na condição */
const filter = array.filter((product) => product.quantity > 1);
console.log({ filter });

/* .reduce */
/* Transformar os elementos do array em outro tipo de dado, ex: somar o valores de price e quantity */
const reduce = array.reduce((accumulator, product) => {
    return accumulator + (product.price * product.quantity)
    /* 
        Primeira iteração: accumulator = 0 | price = 5000 | quantity = 2 | accumulator + (5000 * 2) = 10000
        Segunda iteração: accumulator = 10000 | price = 20000 | quantity = 1 | accumulator + (20000 * 1) = 30000
        Terceira iteração: accumulator = 30000 | price = 1000 | quantity = 5 | accumulator + (5000 * 5) = 35000
    */
}, 0); /* Valor inicial, pode ser qualquer tipo de elemento, até mesmo string e array */
console.log({ reduce });
