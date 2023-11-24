//UUID - Unique Universal ID
import { randomUUID } from "node:crypto"

export class DatabaseMemory { 
    //# serve para criar uma informação privada
    #videos = new Map()

    list(search) {
        return Array.from(this.#videos.entries())
        .map((videoArray) => {            
            const id = videoArray [0]
            const data = videoArray[1]
        
        return {
            id,
            ...data,
        }        
        })
        //Função para filtrar pelo que esta incluso na variavel 'search'
        .filter(video => {
            if (search) {
                return this.#videos.title.includes(search)
            }


            return true
        })
    }

    /* Estrutura de dados:
        Set: É como se fosse um array em JavaScript, o bom dele é não aceitar valores duplicados

        Map: É como se fosse um objeto com particularidades especificas
    */

    //Método para criar video 
    create(video) {
        //randomUUID ira criar um ID unico 
        const videoId = randomUUID()

        //Método set do MAP, por padrão ele recebe 2 parametros, uma chave 'key' ou ID e um valor.
        this.#videos.set(videoId, video)
    }

    //Método para atualizar que recebe o ID do video
    update(id ,video) {
        this.#videos.set(id, video)
    }

    //Método para deletar um registro pelo ID
    delete(id) {
      this.#videos.delete(id)
    }
}