const readline = require('readline')
const fetch = require('node-fetch')
const iconv = require('iconv-lite')

async function getPageData() {
    const regular = /(?<=<small><b>)(?<type>.*?)(?=<\/b>).*?(?<=<\/small><\/tt> <A HREF=)(?<uri>.*?)(?=\/>).*?(?<=\/><b>)(?<name>.*?)(?=<\/b><\/A>)/   
    const autors = []

    const data = await fetch('http://lib.ru/RUFANT/')
        .then(response => response.body.pipe(iconv.decodeStream('koi8-r')))
    
    const rl = readline.createInterface({
        input: data
    });
              
    rl.on('line', (input) => {
        const result = regular.exec(input)       
        if (result) {  
            const { name, type, uri } = result.groups
            const newObject = { name, type, uri }
            autors.push(newObject)
        }
    })

    .on('close', () => {
        console.log(autors)
    })
}
getPageData()



// const http = require('http')
// const iconv = require('iconv-lite')
 
// http.get("http://lib.ru/RUFANT/", function(res) {
//    res.pipe(iconv.decodeStream('koi8-ru')).collect(function(err, decodedBody) {
//       let autors = []
//       let result
//       const regular = /(?<=<small><b>)(?<type>.*?)(?=<\/b>).*?(?<=<\/small><\/tt> <A HREF=)(?<uri>.*?)(?=\/>).*?(?<=\/><b>)(?<name>.*?)(?=<\/b><\/A>)/g
//       while (result = regular.exec(decodedBody)) {
//          const { name, type, uri } = result.groups
//          const newObject = { name, type, uri }
//          autors.push(newObject)
//       }
//       console.log(autors)
//    });  
// });