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
    
    async atualizar(id: number, novosDados: Partial<Cliente>): Promise<Cliente> {
        let clienteAlt = await this.repository.findOneBy({ id: id });

        if (!clienteAlt) {
            throw ({ id: 404, msg: "Cliente não encontrado" });
        }
        
        if (novosDados.nome) clienteAlt.nome = novosDados.nome;
        if (novosDados.email) clienteAlt.email = novosDados.email;

        return await this.repository.save(clienteAlt);
    }
    
    async deletar(id: number): Promise<Cliente> {
        let clienteDeletado = await this.repository.findOneBy({ id: id });

        if (!clienteDeletado) {
            throw ({ id: 404, msg: "Cliente não encontrado" });
        }
        await this.repository.remove(clienteDeletado);
        return clienteDeletado;
    }
}