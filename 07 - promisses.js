/*
const apiCall = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Sucesso!');
    }, 2000);
});

apiCall.then((resolve) => {
    console.log(resolve);
}).catch((error) => {
    console.log(error);
})
*/

const mock = 8;

/* then/catch */
const testingPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(mock <= 6) {
        return resolve('Sucesso!')
        }
        reject('Error!')
    }, 1000);
});

testingPromise.then((resposta) => {
    console.log(resposta);
}).catch((error) => {
    console.log(error);
});

/* async/await - try/catch */
async function run() {
    try {
        const resposta = await testingPromise;
        console.log(resposta);
    } catch (erro) {
        console.log(erro);
    }
}

run();