import {Tarefa} from './tarefa';

// Por conta dos problemas que encontramos nessa primeira entrega, decidimos deixar a implementação desta classe para a próxima fase
export class Usuario {

  constructor(
      public nome: string,
      public email: string,
      public tarefas: Tarefa[],
  ) {}
}
