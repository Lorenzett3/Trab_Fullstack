//service/PedidoService.ts

import { Repository } from 'typeorm';
import { Pedido } from '../entity/Pedido';
import { Produto } from '../entity/Produto';
import { Cliente } from '../entity/Cliente';

export class PedidoService {
  private repository: Repository<Pedido>;

  constructor(repository: Repository<Pedido>) {
    this.repository = repository;
  }

  async inserir(pedido: Partial<Pedido>): Promise<Pedido> {
    if (!pedido.cliente || !pedido.listaProdutos || pedido.listaProdutos.length <= 0) {
      throw ({ id: 400, msg: "Pedido inválido! Deve conter um cliente e ao menos um item do cardápio." });
    }
    const novoPedido = this.repository.create({
      ...pedido,
      dataHora: new Date(),
      cliente: pedido.cliente as Cliente,
      listaProdutos: pedido.listaProdutos as Produto[]
    });

    return await this.repository.save(novoPedido);
  }

  async listar(): Promise<Pedido[]> {
    return await this.repository.find({
      relations: {
        cliente: true,
        listaProdutos: true
      }
    });
  }

  async buscarPorClienteId(clienteId: string): Promise<Pedido[]> {
    return await this.repository.find({
      relations: {
        cliente: true,
        listaProdutos: true
      },
      where: {
        cliente: { id: parseInt(clienteId) }
      }
    });
  }

  async buscarPorId(id: string): Promise<Pedido> {
    let pedido = await this.repository.findOne({
      relations: {
        cliente: true,
        listaProdutos: true
      },
      where: {
        id: id
      }
    });
    if (!pedido) {
      throw ({ id: 404, msg: "Pedido não encontrado" });
    }
    return pedido;
  }

  async atualizar(id: string, novosDados: Partial<Pedido>): Promise<Pedido> {
    let pedidoAlt = await this.repository.findOneBy({ id: id });

    if (!pedidoAlt) {
      throw ({ id: 404, msg: "Pedido não encontrado" });
    }

    if (novosDados.cliente) pedidoAlt.cliente = novosDados.cliente as Cliente;
    if (novosDados.listaProdutos) pedidoAlt.listaProdutos = novosDados.listaProdutos as Produto[];

    return await this.repository.save(pedidoAlt);
  }

  async deletar(id: string): Promise<Pedido> {
    let pedidoDeletado = await this.repository.findOneBy({ id: id });

    if (!pedidoDeletado) {
      throw ({ id: 404, msg: "Pedido não encontrado" });
    }
    else {
      await this.repository.remove(pedidoDeletado);
      return pedidoDeletado;
    }
  }
}