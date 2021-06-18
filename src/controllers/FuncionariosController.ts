import { Request, Response } from 'express'

import { FuncionariosServices } from '../services/FuncionariosServices'

class FuncionariosController {

    // a) Cadastrar funcionarios //
    async create(request: Request, response: Response) { 
        const { nome, cpf, funcao } = request.body 
        const funcionariosServices = new FuncionariosServices();
        
        try { 
            const funcionarios = await funcionariosServices.create({ nome, cpf, funcao })
            return response.json(funcionarios)

        }catch(err) {
            return response
                .status(400)
                .json ({ message: err.message}) 
            }

    }
    
    // b) Listar todos os funcionarios //
    async index(request: Request, response: Response) {

        const funcionariosServices = new FuncionariosServices();

        try {

            const funcionarios = await funcionariosServices.index()
            return response.json(funcionarios)
        }catch(err){
            return response
                .status(400)
                .json ({ message: err.message})
        }
    } 


    async show(request: Request, response: Response) {

        const funcionariosServices = new FuncionariosServices();

        const { id } = request.params

        try {
            const funcionarios = await funcionariosServices.show({ id })
            return response.json(funcionarios) 
        }catch(err){
            return response
                .status(400)
                .json ({ message: err.message})
        }
    } 


    async delete(request: Request, response: Response) {

        const funcionariosServices = new FuncionariosServices();

        const { id } = request.params

        try {
            await funcionariosServices.delete({ id })
            return response.json({ message: 'Funcionario foi deletada com sucesso!'}) 
        }catch(err){
            return response
                .status(400)
                .json ({ message: err.message})
        }
    } 


    async update(request: Request, response: Response) {

        const funcionariosServices = new FuncionariosServices();

        let { nome, cpf, funcao } = request.body 

        const { id } = request.params

        try { 
            const funcionarios = await funcionariosServices.update({id, nome, cpf, funcao})
            return response.json(funcionarios)
        }catch(err) {
            return response
                .status(400)
                .json ({ message: err.message})
            }

    }

}


export { FuncionariosController }
