import mongoose from '../database/db';
import { Schema  } from 'mongoose';

const DetalhesSchema = new Schema({
    telefone: {
        type: String,
        required: true,
    },
    Endereco: {
        type: String,
        required: false
    },
});

const Detalhes = mongoose.model('Detalhes', DetalhesSchema);

export default Detalhes;