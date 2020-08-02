const fetch = require('node-fetch')
const fs = require('fs')
const readline = require('readline')
const stream = require('stream')
var http = require('http'),
iconv = require('iconv-lite');
 
http.get("http://lib.ru/RUFANT/", function(res) {
   res.pipe(iconv.decodeStream('koi8-ru')).collect(function(err, decodedBody) {
      let sss = []
      
      const { groups: { type, uri, name }} = /(?<=<small><b>)(?<type>.*?)(?=<\/b>).*?(?<=<\/small><\/tt> <A HREF=)(?<uri>.*?)(?=\/>).*?(?<=\/><b>)(?<name>.*?)(?=<\/b><\/A>)/g.exec(decodedBody)
      const newPageData = { name, type, uri }
      sss.push(newPageData)
      console.log(sss)
   });  
});