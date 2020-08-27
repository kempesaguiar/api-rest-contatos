import { Request, Response } from 'express';
import mongoose from '../database/db';

import Contato from '../models/contato';

export const getAll = async (req: Request, res: Response) => {
    try {
        const contato = await Contato.find(); 
        return res.status(200).json({ contato });
    } catch(e){
        console.log(e);
        res.status(500).json('Erro na busca para listar todos os contatos');
    }    
}

export const createContato = async (req: Request, res: Response) => {
    const { nome, data_nascimento, sexo } = req.body;
    const idade = 18;
    const status = 'Ativo';
    // Verifica data atual > data de nacimento
    const date = new Date();
    console.log(date);

    if (date < data_nascimento){
        return res.status(400).json('Data de nacimento não pode ser maior que a data atual');
    }

    // Criar funcao para calcular a idade
    try {
        const contato = await Contato.create({ nome, data_nascimento, sexo, idade, status });
        return res.status(201).json({ contato });
    } catch(e){
        console.log(e);
        res.status(500).json('Erro na criacao do contato');
    }
}

export const inactiveContato = async (req: Request, res: Response) => {
    const id = req.params.id;
    const inativo = 'Inativo';
    //console.log(id);
    try {
        const contato = await Contato.findByIdAndUpdate( id, {
            status: inativo
        });
        res.status(200).json(`Contato ${id} inativado com sucesso`);
    } catch(e){
        console.log(e);
        res.status(500).json('Erro para Inativar contato');
    }
}

export const deleteContato = async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
        await Contato.findByIdAndRemove(id);
        res.status(200).json(`Contato ${id} removido com sucesso`);
    } catch(e){
        console.log(e);
        res.status(500).json('Erro na exclusao do contato');
    }
}