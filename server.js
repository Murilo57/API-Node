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
import { DatabaseMemory} from './database-memory.js'

//Função para criar servidor
const server = fastify()

const database = new DatabaseMemory()

//função onde pego uma rota após a barra e passo uma função para retorno
server.post('/videos', (request, reply) => {
    database.create({ 
        title: 'Video 01',
        description: 'Esse é o video 01',
        duration: 180,
    })

    console.log(database.list())

    return reply.status(201).send() //Codigo 201 significa q algo foi criado
})    

//Método para requisição
server.get('/videos', () => {
    return ''
})

//Método para alterar um registro
server.put('/videos/:id', () => {
    return ''
})

//Método para deletar um registro
server.delete('/videos/:id', () => {
    return ''
})


//Na biblioteca Fastify ao invés de passar a porta tem que passar como um objeto
server.listen({
    port: 3333,
})