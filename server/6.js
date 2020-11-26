const EventEmitter = require('events');
const fetch = require('node-fetch');
const iconv = require('iconv-lite');

const input = async () => {
    const answer = await fetch('http://lib.ru/RUFANT/')
        .then(response => response.body.pipe(iconv.decodeStream('koi8-ru')))
        .then(data => data.txt())
    console.log(answer)
}
input()
























// class ReadlineInterface extends EventEmitter {
//     constructor(input) {
//         super()
//         this.input = input

//     }
// }

// const readline = {
//     createInterface({ input }) {
//         return new ReadlineInterface(input)
//     }
// }