const fetch = require('node-fetch')

async function getPageData() {
   // const pageData = []
   const res = await fetch('http://lib.ru/RUFANT/')
   const blok = await res.text()

   const reType = /(?<=<small><b>)(.*?)(?=<\/b>)/g
   const reUri = /(?<=<\/small><\/tt> <A HREF=)(.*?)(?=\/>)/g
   const reName = /(?<=\/><b>)(.*?)(?=<\/b><\/A>)/g
   // pageData.push(blok)  
   console.log(blok.match(reType))
   console.log(blok.match(reUri))
   console.log(blok.match(reName))
   // console.log(blok)
   // console.log(pageData)
}
getPageData()

