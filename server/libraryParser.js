const fetch = require('node-fetch')
const iconv = require('iconv-lite')
const fs = require('fs')
const readline = require('readline')
const stream = require('stream')

async function getPageData() {
   let pageData = []
   const res = await fetch('http://lib.ru/RUFANT/')
   const blok = await res.text()

   // const full = /(?<=<small><b>)(?<type>.*?)(?=<\/b>).*?(?<=<\/small><\/tt> <A HREF=)(?<uri>.*?)(?=\/>).*?(?<=\/><b>)(?<name>.*?)(?=<\/b><\/A>)/g
  
   // let result = full.exec(blok)

   const { groups: {type, uri, name}} = /(?<=<small><b>)(?<type>.*?)(?=<\/b>).*?(?<=<\/small><\/tt> <A HREF=)(?<uri>.*?)(?=\/>).*?(?<=\/><b>)(?<name>.*?)(?=<\/b><\/A>)/g.exec(blok)
   const newPageData = {type, uri, name}
   // console.log(`name: ${name}, type: ${type}, uri: ${uri}`);
   // pageData.push(`${name}`, `${type}`, `${uri}`)
   pageData.push(newPageData)
   console.log(pageData)
   // console.log(cosso)

   // console.log(blok)

   // console.log(result.groups.type)
   // console.log(result.groups.uri)
   // console.log(result.groups.name)

}

getPageData()