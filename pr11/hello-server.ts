import * as http from 'http'

const port = 3001
const server = http.createServer()

server.on('request', (request, response) => {
    console.log(`URL: ${request.url}`);
    response.end('Hello, server!')
    })

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
    })