import req from 'supertest';
import router from '../routes/routes';
import server from '../server';
import Contato from '../models/contato';


describe('Soma', () => {
    test('Soma', async () => {
        const a = 3;
        const b = 5;
        const soma = a + b;

        expect(soma).toBe(8);
    });
});


describe('listatodos', () => {
test('listatodos', async () => {
    const res = await req(server).get('/listatodos');
    expect(res.status).toBe(200);
    //expect(res.text).toBe('Get OK');
    });  
});

describe('createContato', () => {
    test('createContato', async () => {
        const res = await req(server).post('/contatos');
        expect(res.status).toBe(201);
        //expect(res.text).toBe('Get OK');
        });  
    });

    describe('inactiveContato', () => {
        test('inactiveContato', async () => {
            const res = await req(server).put('/contatos');
            expect(res.status).toBe(200);
            //expect(res.text).toBe('Get OK');
            });  
        });

  

