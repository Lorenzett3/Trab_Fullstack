import { Request, Response } from "express";
import { LoginService } from "../service/LoginService";

export class LoginController {
    private service: LoginService;
    
    constructor(service: LoginService) {
      this.service = service;
    }
    
    realizarLogin = async (req: Request, res: Response): Promise<void> => {
      const { email, senha } = req.body;
      try{  
          const token = await this.service.verificarLogin(email, senha);
          res.status(201).json({token: token}); 
      }
      catch(err:any) {
          res.status(err.id || 401).json({ error: err.msg || "Erro de login" }); 
      }
    };
}
