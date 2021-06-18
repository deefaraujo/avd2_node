import { Repository, EntityRepository } from 'typeorm'
import {Funcionarios} from '../entities/Funcionarios'


@EntityRepository(Funcionarios)
class FuncionariosRepository extends Repository<Funcionarios> { 

}

export { FuncionariosRepository }