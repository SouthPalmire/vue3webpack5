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

   var message = iconv.encode(iconv.decode(blok, "win1251"), "utf8").toString();

   const { groups: { type, uri, name }} = /(?<=<small><b>)(?<type>.*?)(?=<\/b>).*?(?<=<\/small><\/tt> <A HREF=)(?<uri>.*?)(?=\/>).*?(?<=\/><b>)(?<name>.*?)(?=<\/b><\/A>)/gu.exec(message)
   const newPageData = { name, type, uri }

   pageData.push(newPageData)
   console.log(pageData)

   // console.log(blok)
}

getPageData()