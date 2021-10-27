import { Router } from 'express';

import AutenticacaoController from './controller/autenticacao-controller';

const routes = Router();

routes.get('/', (request, response) => {
    return response.json({ mensagem: "API está online" });
});

routes.post('/autenticacao', (request, response) => {
    
    const id = request.params.id;
    const query = request.query;
    const { login, senha } = request.body;

    return response.json({ mensagem: "API está online", body });
});

export default routes;
