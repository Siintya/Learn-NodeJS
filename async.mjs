function samplePromise(){
    return Promise.resolve('Sintya');
}

const name = await samplePromise();
console.info(name);