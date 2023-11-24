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
import { DatabaseMemory} from './database-memory.js'

//Função para criar servidor
const server = fastify()

const database = new DatabaseMemory()

// Request Body (Corpo da requisição)

//função onde pego uma rota após a barra ae passo uma função para retorno
server.post('/videos', (request, reply) => {
    const { title, description, duration } = request.body
    
    database.create({ 
        title: title,
        description: description,
        duration: duration,
    })

    // console.log(database.list())

    return reply.status(201).send() //Codigo 201 significa q algo foi criado
})    

//Método para requisição
server.get('/videos', (request) => {
    const search = request.query.search

   const videos = database.list(search)   

   return videos
})

//Método para alterar(atualizar) um registro
server.put('/videos/:id', (request, reply) => {
    const videoId = request.params.id
    const { title, description, duration } = request.body    

    database.update(videoId, {
        title: title,
        description: description,
        duration: duration,
    })

    return reply.status(204).send() //Significa uma resposta que obteve sucesso porém não teve conteudo
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