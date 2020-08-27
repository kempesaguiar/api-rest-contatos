import mongoose from '../database/db';
import { Schema } from 'mongoose';

const ContatoSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    data_nascimento: {
        type: String,
        required: true,
    },
    sexo: {
        type: String,
        required: true,
    },
    idade: {
        type: Number,
        required: false,
    },
    status: {
        type: String,
        required: false,
    },
});

const Contato = mongoose.model('Contato', ContatoSchema);

export default Contato;