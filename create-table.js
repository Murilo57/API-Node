import {sql} from './db.js'

//Deleta a tabela existente para corrigir um campo que faltou
sql`DROP TABLE IF EXISTS videos`.then(() => {
    console.log('Tabela existente deletada!')
})


//Criação da tabela
sql`
CREATE TABLE videos (
    id TEXT PRIMARY KEY,
    title TEXT,
    description TEXT,
    duration INTEGER
);
`.then(() => {
    console.log('Tabela criada!')
})