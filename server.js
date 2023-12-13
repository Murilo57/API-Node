/*

Teste utilizando biblioteca http

//Biblioteca para servidor
import { createServer } from 'node:http'

//Função que cria o servidor, onde recebe 2 parametros, um de requisição e um de resposta para api
const server = createServer((request, response) => {
    response.write('teste')

    return response.end()
})a

server.listen(3333)

*/

//Biblioteca para criar API
import {fastify} from 'fastify'
// import { DatabaseMemory} from './database-memory.js' < BANCO DE DADOS EM MEMORIA
import {DatabasePostgres} from './database-postgres.js'

//Função para criar servidor
const server = fastify()

// Banco de dados em memoria \/
// const database = new DatabaseMemory()
const database = new DatabasePostgres()

// Request Body (Corpo da requisição)

//Método para gravar um novo registro
server.post('/videos', async (request, reply) => {
    const { title, description, duration } = request.body
    
    await database.create({ 
        title: title,
        description: description,
        duration: duration,
    })
    // console.log(database.list())

    return reply.status(201).send() //Sucesso no retorno
})    

//Método para leitura
server.get('/videos',async (request) => {
    const search = request.query.search

   const videos = await database.list(search)   

   return videos
})

//Método para update
server.put('/videos/:id', (request, reply) => {
    const videoId = request.params.id
    const { title, description, duration } = request.body    

    database.update(videoId, {
        title: title,
        description: description,
        duration: duration,
    })

    return reply.status(204).send() 
})

//Método para deletar um registro
server.delete('/videos/:id', (request, reply) => {
    const videoId = request.params.id 

    database.delete(videoId)

    return reply.status(204)
})

//Na biblioteca Fastify ao invés de passar a porta tem que passar como um objeto
server.listen({
    port: 3333,
})