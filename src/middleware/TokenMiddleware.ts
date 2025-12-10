//middleware/TokenMiddleware.ts

import { NextFunction, Request, Response } from "express";
import { LoginService } from "../service/LoginService";

export class TokenMiddleware {
    private service: LoginService;

    constructor(service: LoginService) {
        this.service = service;
    }

    verificarAcesso = async (req: Request, res: Response, next: NextFunction) => {
        let token = req.get("Token");
        if (!token) {
            res.status(401).json({ error: "Nenhum token informado!" });
        }
        else {
            try {
                await this.service.validarToken(token);
                next();
            }
            catch (err: any) {
                res.status(err.id || 401).json({ error: err.msg || "Token inválido ou expirado" });
            }
        }
    }
}
