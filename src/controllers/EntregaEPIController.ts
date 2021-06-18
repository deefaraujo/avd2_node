import { Request, Response } from 'express'

import { EntregaEPIServices } from '../services/EntregaEPIServices'

class EntregaEPIController {

    //c) Incluir entregas de EPIs
    async create(request: Request, response: Response) { 
        let { funcionario_id, nome_epi, data_entrega, quantidade_entregue } = request.body 
        
        const entregaEPIServices = new EntregaEPIServices();

        data_entrega = new Date(data_entrega)

        try { 
            const entregaepi = await entregaEPIServices.create({ funcionario_id, nome_epi, data_entrega, quantidade_entregue })
            return response.json(entregaepi)

        }catch(err) {
            return response
                .status(400)
                .json ({ message: err.message}) 
            }

    }

    async index(request: Request, response: Response) { 
        const entregaEPIServices = new EntregaEPIServices()

        try {

            const entregaepi = await entregaEPIServices.index()
            return response.json(entregaepi)
        }catch(err){
            return response
                .status(400)
                .json ({ message: err.message})
        }
    } 


    async show(request: Request, response: Response) { 

        const entregaEPIServices = new EntregaEPIServices()

        const { id } = request.params


        try {

            const entregaepi = await entregaEPIServices.show({ id }) 
            return response.json(entregaepi) 
        }catch(err){
            return response
                .status(400)
                .json ({ message: err.message})
        }
    } 


    async delete(request: Request, response: Response) { 

        const entregaEPIServices = new EntregaEPIServices()

        const { id } = request.params


        try {

            await entregaEPIServices.delete({ id }) 
            return response.json({ message: 'Entrega foi deletada com sucesso!'}) 
        }catch(err){
            return response
                .status(400)
                .json ({ message: err.message})
        }
    } 


    async update(request: Request, response: Response) { 

        const entregaEPIServices = new EntregaEPIServices();
        

        let { funcionario_id, nome_epi, data_entrega, quantidade_entregue } = request.body
        data_entrega = new Date(data_entrega)

        const { id } = request.params
        
        

        try { 
            const entregaepi = await entregaEPIServices.update({ id, funcionario_id, nome_epi, data_entrega, quantidade_entregue })
            return response.json(entregaepi)
        }catch(err) {
            return response
                .status(400)
                .json ({ message: err.message})
            }

    }


}



export { EntregaEPIController }