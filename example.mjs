import hapiMongoose from 'hapi-mongoose';
import Aluno from './Models/AlunoExample.mjs';

const options = {
    promises: 'native',
    uri: process.env.DATABASE_URL
};

 export default async (server)=>{

    await server.register({
        plugin: hapiMongoose,
        options: options
    });

    const db = server.plugins['hapi-mongoose'].connection;
    const mongoose = server.plugins['hapi-mongoose'].lib;

    const AlunoModel = Aluno(db, mongoose);

    server.plugins['hapi-mongoose'].Aluno = AlunoModel;
 }
