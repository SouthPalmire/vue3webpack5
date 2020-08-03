const fetch = require('node-fetch')
const iconv = require('iconv-lite')

async function getPageData() {
    const res = await fetch('http://lib.ru/RUFANT/')
    const blok = await res.text()
    const message = iconv.decode(blok, "koi8-ru").toString()
    const massive = []
    const regular = /(?<=<small><b>)(?<type>.*?)(?=<\/b>).*?(?<=<\/small><\/tt> <A HREF=)(?<uri>.*?)(?=\/>).*?(?<=\/><b>)(?<name>.*?)(?=<\/b><\/A>)/g
    
    let result
    while (result = regular.exec(message)) {
        const {name, type, uri} = result.groups
        const newObject = {name, type, uri}
        massive.push(newObject)
    }

    console.log(massive)
}

getPageData()