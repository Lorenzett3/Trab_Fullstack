//service/UsuarioService.ts

import { Repository } from 'typeorm';
import { Usuario } from '../entity/Usuario';

export class UsuarioService {
  private repository: Repository<Usuario>;

  constructor(repository: Repository<Usuario>) {
    this.repository = repository;
  }

  async inserir(usuario: Usuario): Promise<Usuario> {
    if (!usuario || !usuario.email || !usuario.senha) {
      throw ({ id: 400, msg: "Falta dados obrigatórios para o cadastro" });
    }
    return await this.repository.save(usuario);
  }

  async listar(): Promise<Usuario[]> {
    return await this.repository.find();
  }
}
