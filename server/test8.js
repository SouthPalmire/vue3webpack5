// const stream = require('stream')
// const fetch = require('node-fetch')
// const iconv = require('iconv-lite')

// function getPageData() {
//    const pageData = []
// fetch('http://lib.ru/RUFANT/')
// res.text(data => data)

   
//    console.log(blok)
// }
// getPageData()

const stream = require('stream')
const fetch = require('node-fetch')
const iconv = require('iconv-lite')
const fs = require('fs');
const readline = require('readline');

async function lineCreate() {
    const res = await fetch('http://lib.ru/RUFANT/')
    const blok = await res.text()
    // const www = ''
    const fileStream = fs.createReadStream(blok)
//   .pipe(iconv.decodeStream('win1251'))
//   .pipe(iconv.encodeStream('utf8'))
//   .pipe(fs.createWriteStream(www))


//   const reliase = readline.createInterface({
//     input: fileStream,
//     crlfDelay: Infinity
//   });

//   for await (const line of reliase) {
//     console.log(`Line from file: ${line}`);
//   }
    console.log(fileStream)
}
lineCreate();

const { groups: { type, uri, name }} = /(?<=<small><b>)(?<type>.*?)(?=<\/b>).*?(?<=<\/small><\/tt> <A HREF=)(?<uri>.*?)(?=\/>).*?(?<=\/><b>)(?<name>.*?)(?=<\/b><\/A>)/g.exec(decodedBody)
const newPageData = { name, type, uri }
massive.push(newPageData)
