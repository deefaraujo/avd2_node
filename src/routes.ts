import { Router } from 'express'

import { FuncionariosController } from './controllers/FuncionariosController'
import { EntregaEPIController } from './controllers/EntregaEPIController'

const routes = Router();

const funcionariosController = new FuncionariosController();
const entregaEPIController = new EntregaEPIController();

//Rotas da tabela Funcionarios//
routes.post('/funcionarios', funcionariosController.create)
routes.get('/funcionarios', funcionariosController.index)
routes.get('/funcionarios/:id', funcionariosController.show)
routes.delete('/funcionarios/:id', funcionariosController.delete)
routes.put('/funcionarios/:id', funcionariosController.update)

//Rotas da tabela EntregaEPI//
routes.post('/entregaepi', entregaEPIController.create)
routes.get('/entregaepi', entregaEPIController.index)
routes.get('/entregaepi/:id', entregaEPIController.show)
routes.delete('/entregaepi/:id', entregaEPIController.delete)
routes.put('/entregaepi/:id', entregaEPIController.update)

export { routes }

