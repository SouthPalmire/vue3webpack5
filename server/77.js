var fs = require('fs');
const EventEmitter = require('events');
const fetch = require('node-fetch');
const iconv = require('iconv-lite');


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