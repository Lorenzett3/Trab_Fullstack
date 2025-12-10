//src/service/ClienteService.ts

import { Repository } from 'typeorm';
import { Cliente } from '../entity/Cliente';

export class ClienteService {
    private repository: Repository<Cliente>;

    constructor(repository: Repository<Cliente>) {
        this.repository = repository;
    }

    async listar(): Promise<Cliente[]> {
        return await this.repository.find();
    }

    async inserir(cliente: Cliente): Promise<Cliente> {
        if (!cliente.nome || !cliente.email) {
            throw ({ id: 400, msg: "Falta dados obrigatórios (nome ou email) para o cadastro do cliente." });
        }
        return await this.repository.save(cliente);
    }
}