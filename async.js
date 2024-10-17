function samplePromise(){
    return Promise.resolve('Sintya');
}

async function run () {
    const name = await samplePromise();
    console.info(name);
}

run();