const EventEmitter = require('events');
const fetch = require('node-fetch');
const iconv = require('iconv-lite');

class ReadlineInterface extends EventEmitter {
    constructor(input) {
        super()
        this.input = input
        const autors = input.split("\n")
        console.log(autors)
        console.log(typeof autors)
    }
}

// const readline = {
//     createInterface({ input }) {
//         return new ReadlineInterface(input)
//     }
// };

(async () => {
    const getStream = await fetch('http://lib.ru/RUFANT/')
        .then(response => response.body.pipe(iconv.decodeStream('koi8-ru')))
    getStream.on('data', (chunk) => {
        return new ReadlineInterface(chunk)
    })
})()