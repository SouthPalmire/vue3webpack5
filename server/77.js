<<<<<<< HEAD
var fs = require('fs');
const EventEmitter = require('events');
=======
// const EventEmitter = require('events');
>>>>>>> 3df4130195b1934da41c98efdadfa6378a5b8ff6
const fetch = require('node-fetch');
const iconv = require('iconv-lite');


<<<<<<< HEAD
const www = async function getData() {
  let autors = []
  const data = await fetch('http://lib.ru/RUFANT/')
    .then(response => response.body.pipe(iconv.decodeStream('koi8-ru')))

  data.on('data', function(chunk) {
    console.log(chunk)
  })
  
  

}
console.log(www())
// getData()
=======
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
>>>>>>> 3df4130195b1934da41c98efdadfa6378a5b8ff6
