const EventEmitter = require('events');
const fetch = require('node-fetch');
const iconv = require('iconv-lite');

class ReadLineIntarface extends EventEmitter {
    constructor(input) {
        super()
        this.input = input
    }
    // createOutput() {
    //     const autors = []
    //     console.log(autors)
    // }
}

const off = async function getData() {
    let getBody = ''
    await fetch('http://lib.ru/RUFANT/')
        .then(response => response.body.pipe(iconv.decodeStream('koi8-ru')))
        .then(data => getBody = data) 
        console.log(getBody)
    }
  
const test = new ReadLineIntarface(off())
// console.log(test)
// console.log(test.createOutput())

// const readline = {
//     createInterface({ input }) {
//         return new ReadLineIntarface(input)
//     }
// }