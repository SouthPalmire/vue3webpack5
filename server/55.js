const fetch = require('node-fetch')
const iconv = require('iconv-lite')
const fs = require('fs')
const readline = require('readline')
const stream = require('stream')

async function getPageData() {
   let pageData = []
   let blokDecode = ''
   const res = await fetch('http://lib.ru/RUFANT/')
   const blok = await res.text()

   const full = /(?<=<small><b>)(?<type>.*?)(?=<\/b>).*?(?<=<\/small><\/tt> <A HREF=)(?<uri>.*?)(?=\/>).*?(?<=\/><b>)(?<name>.*?)(?=<\/b><\/A>)/g

   var message = iconv.encode(iconv.decode(blok, "win1251"), "utf8").toString();

   fs.createReadStream(blok)
     .pipe(iconv.decodeStream('cp866'))
     .pipe(iconv.encodeStream('cp1251'))
     .pipe(fs.createWriteStream(blokDecode))
   console.log(blokDecode)

   fs.readFile(blok, null, function read(err, data) {
      if (err) {
        throw err;
      }
      var mmmessage = iconv.decode(data, "cp866").toString();
      console.log(mmmessage)
    });

}


getPageData()

ar http = require('http'),
    iconv = require('iconv-lite');

    http.get("http://lib.ru/RUFANT/", function(res) {
      res.pipe(iconv.decodeStream('koi8-ru')).collect(function(err, decodedBody) {
        console.log(decodedBody);
      });
    });

http.get("http://lib.ru/RUFANT/", function(res) {
   res.pipe(iconv.decodeStream('koi8-ru')).collect(function(err, decodedBody) {
      console.log(decodedBody);
   });
});

const res = fetch("http://lib.ru/RUFANT/")  
  .then(  
    function(res) {  
       
      res.pipe(iconv.decodeStream('koi8-ru')).collect(function(err, decodedBody) {
         console.log(decodedBody);
      });
  });