const http = require('http')
const iconv = require('iconv-lite')
 
http.get("http://lib.ru/RUFANT/", function(res) {
   res.pipe(iconv.decodeStream('koi8-ru')).collect(function(err, decodedBody) {
      let massive = []
      let result
      const regular = /(?<=<small><b>)(?<type>.*?)(?=<\/b>).*?(?<=<\/small><\/tt> <A HREF=)(?<uri>.*?)(?=\/>).*?(?<=\/><b>)(?<name>.*?)(?=<\/b><\/A>)/g
      while (result = regular.exec(decodedBody)) {
         const {name, type, uri} = result.groups
         const newObject = {name, type, uri}
         massive.push(newObject)
      }
      console.log(massive)
   });  
});