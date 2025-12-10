//src/controller/ClienteController.ts

import { Request, Response } from 'express';
import { ClienteService } from '../service/ClienteService';
import { Cliente } from '../entity/Cliente';

export class ClienteController {
    private service: ClienteService;

    constructor(service: ClienteService) {
        this.service = service;
    }

    inserir = async (req: Request, res: Response): Promise<void> => {
        const { nome, email } = req.body;
        try {
            const novoCliente = await this.service.inserir({ nome, email } as Cliente);
            res.status(201).json(novoCliente);
        }
        catch (err: any) {
            res.status(err.id || 500).json({ error: err.msg || "Erro ao inserir cliente" });
        }
    };

    listar = async (_req: Request, res: Response): Promise<void> => {
        try {
            const clientes = await this.service.listar();
            res.json(clientes);
        } catch (err: any) {
            res.status(err.id || 500).json({ error: err.msg || "Erro ao listar clientes" });
        }
    };

    atualizar = async (req: Request, res: Response): Promise<void> => {
        const id = parseInt(req.params.id);
        const { nome, email } = req.body;
        try {
            const clienteAtualizado = await this.service.atualizar(id, { nome, email });
            res.json(clienteAtualizado);
        } catch (err: any) {
            res.status(err.id || 500).json({ error: err.msg || "Erro ao atualizar cliente" });
        }
    };

    deletar = async (req: Request, res: Response): Promise<void> => {
        const id = parseInt(req.params.id);
        try {
            const clienteDeletado = await this.service.deletar(id);
            res.json(clienteDeletado);
        } catch (err: any) {
            res.status(err.id || 500).json({ error: err.msg || "Erro ao deletar cliente" });
        }
    };
}