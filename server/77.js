// const EventEmitter = require('events');
const fetch = require('node-fetch');
const iconv = require('iconv-lite');


async function getPageData() {


    const data = await fetch('http://lib.ru/RUFANT/')
        .then(response => response.body.pipe(iconv.decodeStream('koi8-r')))
    
    data.on("data", function(chunk){ 
        const autors = []
        autors.push(chunk);
        console.log(autors);
    });
    
    // console.log(data)
}
getPageData()





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