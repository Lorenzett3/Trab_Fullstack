import { Request, Response } from "express";
import { PedidoService } from "../service/PedidoService";

export class PedidoController {
    private service: PedidoService;
 
    constructor(service: PedidoService) {
      this.service = service;
    }
 
    inserir = async (req: Request, res: Response): Promise<void> => {
      const { cliente, listaProdutos } = req.body; 
      try{ 
          const newPedido = await this.service.inserir({ cliente, listaProdutos });
          res.status(201).json(newPedido); 
      }
      catch(err:any) {
          res.status(err.id || 500).json({ error: err.msg || "Erro ao inserir pedido" }); 
      }
    };
 
    listar = async (_req: Request, res: Response): Promise<void> => {
      const pedidos = await this.service.listar();
      res.json(pedidos); 
    };
 
    buscarPorId = async (req: Request, res: Response): Promise<void> => {
      const id = req.params.id;
      try{ 
          const pedido = await this.service.buscarPorId(id);
          res.json(pedido);
      } catch (err: any) {
          res.status(err.id || 500).json({ error: err.msg || "Erro ao buscar pedido" }); 
      }
    };

    atualizar = async (req: Request, res: Response): Promise<void> => {
        const id = req.params.id;
        const { cliente, listaProdutos } = req.body; 

        try{ 
            const pedidoAtualizado = await this.service.atualizar(id, { cliente, listaProdutos });
            res.json(pedidoAtualizado);
        } catch (err: any) {
            res.status(err.id || 500).json({ error: err.msg || "Erro ao atualizar pedido" });
        }
    };

    deletar = async (req: Request, res: Response): Promise<void> => {
        const id = req.params.id;
        try{ 
            const pedidoDeletado = await this.service.deletar(id);
            res.json(pedidoDeletado); 
        } catch (err: any) {
            res.status(err.id || 500).json({ error: err.msg || "Erro ao deletar pedido" });
        }
    };
}
