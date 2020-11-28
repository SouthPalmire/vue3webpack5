const EventEmitter = require('events');
const fetch = require('node-fetch');
const iconv = require('iconv-lite');

class ReadlineInterface extends EventEmitter {
    constructor(input) {
        super()
        this.input = input
        // console.log(input)
    }
}

const readline = {
    createInterface({ input }) {
        return new ReadlineInterface(input)
    }
};
