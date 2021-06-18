import { getCustomRepository } from 'typeorm'
import {  FuncionariosRepository  } from '../repositories/FuncionariosRepository'

//interface do create
interface IFuncionariosCreate {
    nome: string;
    cpf: string;
    funcao: string
}

//interface do show
interface IFuncionariosShow {
    id: string
}

//interface do update
interface IFuncionariosUpdate {
    id: string;
    nome: string;
    cpf: string;
    funcao: string
}

class FuncionariosServices {

    // a) Cadastrar funcionarios //
    async create({ nome, cpf, funcao }: IFuncionariosCreate) {

        const funcionariosRepository = getCustomRepository(FuncionariosRepository)

        const funcionarios = funcionariosRepository.create({ 
            nome, 
            cpf,
            funcao
        })

        await funcionariosRepository.save(funcionarios)

        return funcionarios;
    }
    // b) Listar todos os funcionarios //
    async index() {

        const funcionariosRepository = getCustomRepository( FuncionariosRepository ) 

        const funcionarios = await funcionariosRepository.find() 


        return funcionarios;
    }


    async show({ id }: IFuncionariosShow) {

        const funcionariosRepository = getCustomRepository( FuncionariosRepository ) 

        const funcionarios = await funcionariosRepository.findOne({ id }) 

      if (!funcionarios){
          throw new Error('Id do cliente não existe!!')
      }

        return funcionarios;
    }


    async delete({ id }: IFuncionariosShow) {

        const funcionariosRepository = getCustomRepository( FuncionariosRepository ) 

        const funcionarios = await funcionariosRepository.findOne({ id }) 
      
        if (!funcionarios){
          throw new Error('Id do Funcionario não existe!') 
      }
      
      return await funcionariosRepository.delete({ id })
    }


    async update({ id, nome, cpf, funcao }: IFuncionariosUpdate) {
        
        const funcionariosRepository = getCustomRepository( FuncionariosRepository )
        
        let funcionarios = await funcionariosRepository.findOne({ id })
    
        

        if (!funcionarios) {
          throw new Error('Id do Funcionario não existe!') 
        }

        await funcionariosRepository.update(
          id, {
            nome, 
            cpf,
            funcao
        })
        
        funcionarios = await funcionariosRepository.findOne({ id })
    
        return funcionarios
    
      }

}

export { FuncionariosServices }