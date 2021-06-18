import { Entity, CreateDateColumn, UpdateDateColumn, PrimaryColumn, Column, JoinColumn, ManyToOne } from 'typeorm'

//Importando a tabela de funcionarios para //
// o relacionamento entre tabelas //
import { Funcionarios } from './Funcionarios'

import { v4 as uuid } from 'uuid' // identificador universal unico

@Entity('entregaEPI')
class EntregaEPI {

  @PrimaryColumn()
  id: string;

  @JoinColumn({ name: 'funcionario_id'})
  //tipo do relacionamento:
  @ManyToOne(() => Funcionarios)
  funcionarios: Funcionarios;

  @Column()
  funcionario_id: string;

  @Column()
  nome_epi: string;

  @Column()
  data_entrega: Date;

  @Column()
  quantidade_entregue: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}

export { EntregaEPI }