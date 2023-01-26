/* Diferença entre function e arrow function */

function minhaFuncao() { /* Possui o próprio this (construtor) */
    this.name = 'Matheus';

    const minhaArrowFunction = () => { /* Utiliza o this do escopo (construtor do escopo) */
        this.lastName = 'Kamer'
    };

    minhaArrowFunction();
}

console.log(new minhaFuncao());

/* Utilização de arguments */

function soma(primary, ...args) {
    console.log({args});
    console.log({primary});
}

const somaArrow = (...args) => {
    console.log({args});
};

soma(1, 2, 3, 4, 5)
somaArrow(6, 7, 8, 9)

/* Diferença de usabilidade entre colchetes e parentes */

const arrowFunction01 = () => 'Hello world!'; /*  short syntax */

console.log(arrowFunction01());

const algumNumero = 11;
const arrowFunction02 = () => ( /* Condição ternaria */
    algumNumero <= 10
    ? 'Menor que 10'
    : 'Maior que 10'
); 

console.log(arrowFunction02());

const getUser = () =>({ /* Retornar um objeto sem usar o método "return" */
    id: 1,
    name: 'Matheus'
}); 

console.log(getUser());
