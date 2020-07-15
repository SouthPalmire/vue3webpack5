const fetch = require('node-fetch')

async function getPageData() {
   const pageData = []
   const res = await fetch('http://lib.ru/RUFANT/')
   const blok = await res.text()

   const reType = /(?<=<small><b>)(.*?)(?=<\/b>)/g
   const reUri = /(?<=<\/small><\/tt> <A HREF=)(.*?)(?=\/>)/g
   const reName = /(?<=\/><b>)(.*?)(?=<\/b><\/A>)/g
  
   // console.log(blok)
   pageData.push(blok.match(reType))
   pageData.push(blok.match(reUri))
   pageData.push(blok.match(reName))
   console.log(pageData)
}
getPageData()

