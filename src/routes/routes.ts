import { Router } from 'express';
import mongoose from '../database/db';
import { getAll, createContato, inactiveContato, deleteContato  } from '../controllers/contato.controller';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    return res.status(200).json('Get OK')
});

router.get('/contatos', getAll);
router.post('/contatos', createContato);
router.put('/contatos/:id', inactiveContato);
router.delete('/contatos/:id', deleteContato);


export default router;