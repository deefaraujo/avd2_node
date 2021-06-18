import { getCustomRepository } from 'typeorm'
import { EntregaEPIRepository } from '../repositories/EntregaEPIRepository'

interface IEntregaEPICreate {
    funcionario_id: string;
    nome_epi: string;
    data_entrega: Date;
    quantidade_entregue: number
}


interface IEntregaEPIShow {
    id: string
}


interface IEntregaEPIUpdate {
    id: string;
    funcionario_id: string;
    nome_epi: string;
    data_entrega: Date;
    quantidade_entregue: number
}
class EntregaEPIServices {

    //c) Incluir entregas de EPIs
    async create({ funcionario_id, nome_epi, data_entrega, quantidade_entregue }: IEntregaEPICreate) {

        const entregaEPIRepository = getCustomRepository(EntregaEPIRepository)

        const entregaepi = entregaEPIRepository.create({ 
            funcionario_id, 
            nome_epi, 
            data_entrega,
            quantidade_entregue
        })

        await entregaEPIRepository.save(entregaepi)

        return entregaepi;
    }

    async index() {

        const entregaEPIRepository = getCustomRepository(EntregaEPIRepository) 


        const entregaepi = await entregaEPIRepository.find({

            relations: ['funcionarios']
        }) 


        return entregaepi;
    }

    async show({ id }: IEntregaEPIShow) {

        const entregaEPIRepository = getCustomRepository(EntregaEPIRepository) 


        const entregaepi = await entregaEPIRepository.findOne( id, 
            { relations: ['funcionarios']}) 


      if (!entregaepi){
          throw new Error('ID da Entrega não existe!!') 
      }


        return entregaepi;
    }


    async delete({ id }: IEntregaEPIShow) { 

        const entregaEPIRepository = getCustomRepository(EntregaEPIRepository) 

        const entregaepi = await entregaEPIRepository.findOne({ id }) 

      
        if (!entregaepi){
            throw new Error('Id da Entrega não existe!') 
        }
      
      return await entregaEPIRepository.delete({ id })
    }


    async update({ id, funcionario_id, nome_epi, data_entrega, quantidade_entregue }: IEntregaEPIUpdate) {
        

        const entregaEPIRepository = getCustomRepository(EntregaEPIRepository)
        
        let entregaepi = await entregaEPIRepository.findOne({ id })
    
        
        if (!entregaepi) {
          throw new Error('ID da Entrega não existe!!')
        }

        await entregaEPIRepository.update(
          id, {
            funcionario_id, 
            nome_epi,
            data_entrega, 
            quantidade_entregue
        })
        
        entregaepi = await entregaEPIRepository.findOne({ id })
    
        return entregaepi
    
      }
}

export { EntregaEPIServices }