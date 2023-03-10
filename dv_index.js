const CC = require('currency-converter-lt')

const fs = require('fs')

const http = require('http')

let currencyConverter = new CC({from:"USD", to:"EUR", amount:100})

currencyConverter.convert().then((response) => {
    console.log(response) 
})

// Подключения модуля os 

const os = require('os')

let res = os.platform()

console.log(res)

//Import module

const math = require('./math')

let res1 = math.add(12, 8, 54)
let res2 = math.minus(0.23, 21)

console.log(`Results: ${res1}, ${res2}`)

//Работа с файлами

//let result = fs.readFileSync('some.txt', 'utf-8')    //Для асинхронного файла писать readFile без Sync

//console.log(result)

//fs.writeFileSync('some.txt', 'Hello World')

/*fs.readFile('some.txt', 'utf-8', (err, data) => {
    fs.writeFile('some.txt', data + '\nHello World', (err, data) => {
        console.log('All right')
    })
}) */

//fs.mkdirSync('text-files')   синхронная  функция 

/*fs.mkdir('text-files', () => {      //асинхронная функция создать файл 
    fs.writeFile('./text-files/some.txt', 'Hello', () => {})
})  */

//Удалить файл 

fs.unlink('./text-files/some.txt', () => {
    fs.rmdir('./text-files', () => { })
})

// Создания сервера

/*let server = http.createServer((req, res) => {
    res.writeHead(200, {'Contet-Type': 'text/html:charset=utf-8'})
    const stream = fs.createReadStream('./templates/index.html')
    stream.pipe(res)
})  */

let server = http.createServer((req, res) => {
    res.writeHead(200, {'Contet-Type': 'text/html:charset=utf-8'})

    if (req.url == '/')
        fs.createReadStream('./templates/index.html').pipe(res)
    else if (req.url == '/about')
        fs.createReadStream('./templates/about.html').pipe(res)   
    else 
        fs.createReadStream('./templates/error.html').pipe(res)
})

const PORT = 3000
const HOST = 'localhost'   //or 127.0.0.1

server.listen(PORT, HOST, () => {
    console.log(`Сервер запущен: http://${HOST}:${PORT}`)
})

