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

   const { groups: { type, uri, name }} = /(?<=<small><b>)(?<type>.*?)(?=<\/b>).*?(?<=<\/small><\/tt> <A HREF=)(?<uri>.*?)(?=\/>).*?(?<=\/><b>)(?<name>.*?)(?=<\/b><\/A>)/g.exec(blok)
   const newPageData = { name, type, uri }

   pageData.push(newPageData)
   console.log(pageData)

   // console.log(blok)

}

getPageData()