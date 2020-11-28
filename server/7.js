const EventEmitter = require('events');
const fetch = require('node-fetch');
const iconv = require('iconv-lite');

class ReadlineInterface extends EventEmitter {
    constructor(input) {
        super()
        this.input = input
        console.log(input)
    }
}

const readline = {
    createInterface({ input }) {
        return new ReadlineInterface(input)
    }
};

// (async () => {
//     const input = []
//     const getStream = await fetch('http://lib.ru/RUFANT/')
//         .then(response => response.body.pipe(iconv.decodeStream('koi8-ru')))
//     getStream.on('data', (chunk) => {
//         input.push(chunk.toString())
//     })
//     getStream.on('end', () => {
//         console.log(input)    
//     })
// })()