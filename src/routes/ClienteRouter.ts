//src/ClienteRouter.ts

import { Router } from 'express';
import { ClienteController } from '@root/controller/ClienteController';

export const clienteRotas = (controller: ClienteController): Router => {
    const router = Router();

    router.get('/', controller.listar);
    router.post('/', controller.inserir);
    return router;
};