import 'module-alias/register'; 
import express from 'express';
import { ProdutoService } from './service/ProdutoService';
import { ProdutoController } from './controller/ProdutoController';
import { produtoRotas } from './routes/ProdutoRouter';
import { AppDataSource } from './data-source'; 
import { Produto } from './entity/Produto';
import { Pedido } from './entity/Pedido';
import { PedidoService } from './service/PedidoService';
import { PedidoController } from './controller/PedidoController';
import { pedidoRotas } from './routes/PedidoRouter';
import { Usuario } from './entity/Usuario';
import { UsuarioService } from './service/UsuarioService';
import { UsuarioController } from './controller/UsuarioController';
import { LoginService } from './service/LoginService';
import { LoginController } from './controller/LoginController';
import { TokenMiddleware } from './middleware/TokenMiddleware';
import { usuarioRotas } from './routes/UsuarioRouter';
import { Cliente } from './entity/Cliente'; 
import { Categoria } from './entity/Categoria'; 

AppDataSource.initialize().then(async () => {
  const app = express();
  app.use(express.json());

  const categoriaRepository = AppDataSource.getRepository(Categoria);
  
  let sanduiches = await categoriaRepository.findOneBy({ id: 1 });
  if (!sanduiches) {
    sanduiches = categoriaRepository.create({ id: 1, nome: "Sanduíches" });
    await categoriaRepository.save(sanduiches);
    console.log("Categoria Sanduíches (ID 1) criada.");
  }

  let bebidas = await categoriaRepository.findOneBy({ id: 2 });
  if (!bebidas) {
    bebidas = categoriaRepository.create({ id: 2, nome: "Bebidas" });
    await categoriaRepository.save(bebidas);
    console.log("Categoria Bebidas (ID 2) criada.");
  }

  const usuarioRepository = AppDataSource.getRepository(Usuario);
  
  const produtoRepository = AppDataSource.getRepository(Produto);
  const produtoService = new ProdutoService(produtoRepository);
  const produtoController = new ProdutoController(produtoService);

  const pedidoRepository = AppDataSource.getRepository(Pedido);
  const pedidoService = new PedidoService(pedidoRepository);
  const pedidoController = new PedidoController(pedidoService);
  
  const usuarioService = new UsuarioService(usuarioRepository);
  const usuarioController = new UsuarioController(usuarioService);
  
  const loginService = new LoginService(usuarioRepository);
  const loginController = new LoginController(loginService);
  const tokenMiddleware = new TokenMiddleware(loginService); 

  app.post('/api/login', loginController.realizarLogin);
  app.use('/api/usuarios', usuarioRotas(usuarioController)); 

  app.use(tokenMiddleware.verificarAcesso); 

  app.use('/api/produtos', produtoRotas(produtoController));
  app.use('/api/pedidos', pedidoRotas(pedidoController));

  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}).catch(error => console.log("Error during Data Source initialization:", error));
