const EventEmitter = require('events');
const fetch = require('node-fetch');
const iconv = require('iconv-lite');

(async () => {
    const input = [];

    const getStream = await fetch('http://lib.ru/RUFANT/')
        .then(response => response.body.pipe(iconv.decodeStream('koi8-ru')))

    getStream.on('data', (chunk) => {
        input.push(chunk.toString());
    })
    getStream.on('end', () => {
        console.log(input)    
    })

    // for await (let chunk of getStream) {
    //     chunks.push(chunk.toString())
    // }
    // console.log(chunks)    
})()


// class ReadlineInterface extends EventEmitter {
//     constructor(input) {
//         super()

//     }
// }

// const readline = {
//     createInterface({ input }) {
//         return new ReadlineInterface(input)
//     }
// }







// readStream()