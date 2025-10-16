import { Repository } from "typeorm";
import { Usuario } from "../entity/Usuario";
import { sign, verify } from "jsonwebtoken";

const SECRET = "Sen@c2025"; 
export class LoginService {
    private repository: Repository<Usuario>;
    
    constructor(repository: Repository<Usuario>) {
      this.repository = repository;
    }
    
    async verificarLogin(email: string, senha: string): Promise<String> {
        let usuario = await this.repository.findOneBy({email: email});
        if(usuario && usuario.senha == senha){             
            let token = sign({ 
                usuarioId: usuario.id,
                usuarioEmail: usuario.email 
            }, SECRET, 
                { expiresIn: '1h' } 
            );
            return token;            
        }
        throw ({id: 401, msg: "Usuário ou senha inválidos"});     
    }    
    
    async validarToken(token: string): Promise<void> {
        try{
            const payload = verify(token, SECRET);

            if(!payload){
                throw ({id: 401, msg: "Token Inválido"});     
            }
            return;
        } catch (err: any) {
            throw ({id: 401, msg: "Token Inválido ou expirado"});     
        }
    }
}
