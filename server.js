/*

Teste utilizando biblioteca http

//Biblioteca para servidor
import { createServer } from 'node:http'

//Função que cria o servidor, onde recebe 2 parametros, um de requisição e um de resposta para api
const server = createServer((request, response) => {
    response.write('teste')

    return response.end()
})

server.listen(3333)

*/

//Biblioteca para criar API
import {fastify} from 'fastify'

//Função para criar servidor
const server = fastify()

//função onde pego uma rota após a barra e passo uma função para retorno
server.get('/', () => {
    return 'Testando 1234'
})

//Rota hello
server.get('/hello', () => {
    return 'Hello World'
})

server.get('/node', () => {
    return 'Test Node.js'
})

//Na biblioteca Fastify ao invés de passar a porta tem que passar como um objeto
server.listen({
    port: 3333,
})