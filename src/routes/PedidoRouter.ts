//routes/PedidoRouter.ts

import { Router } from 'express';
import { PedidoController } from '../controller/PedidoController';

export const pedidoRotas = (controller: PedidoController): Router => {
  const router = Router();

  router.post('/', controller.inserir);
  router.get('/', controller.listar);
  router.get('/cliente/:clienteId', controller.listarPorCliente);
  router.get('/:id', controller.buscarPorId);
  router.put('/:id', controller.atualizar);
  router.delete('/:id', controller.deletar);

  return router;
};