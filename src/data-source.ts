import "reflect-metadata";
import { DataSource } from "typeorm";
import { Produto } from "./entity/Produto";
import { Pedido } from "./entity/Pedido";
import { Usuario } from "./entity/Usuario";
import { Cliente } from "./entity/Cliente";
import { Categoria } from "./entity/Categoria";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.POSTGRES_HOST || "localhost",
    port: parseInt(process.env.POSTGRES_PORT || "5432"),
    username: process.env.POSTGRES_USER || "user",
    password: process.env.POSTGRES_PASSWORD || "password",
    database: process.env.POSTGRES_DB || "rest_db",
    synchronize: true, 
    logging: false,
    entities: [Produto, Pedido, Usuario, Cliente, Categoria],
    migrations: [],
    subscribers: [],
});
