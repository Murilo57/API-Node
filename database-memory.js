//UUID - Unique Universal ID
import { randomUUID } from "node:crypto"

export class DatabaseMemory { 
    //# serve para criar uma informação privada
    #videos = new Map()

    /* Estrutura de dados:
        Set: É como se fosse um array em JavaScript, o bom dele é não aceitar valores duplicados

        Map: É como se fosse um objeto com particularidades especificas
    */

    //Método para criar video 
    create(video) {
        const videoId = random




        //Método set do MAP, por padrão ele recebe 2 parametros, uma chave 'key' ou ID e um valor.
        this.#videos.set(1,)
    }

    //Método para atualizar que recebe o ID do video
    update(id ,video) {
        this.#videos.push(video)
    }
}