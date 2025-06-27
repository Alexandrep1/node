import http from 'http'

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'content-type' : "text/plain"
    })
    res.end("servidor rodando")
})

server.listen(3000, () => {
    console.log("servidor rodando http://localhost:3000/");
})