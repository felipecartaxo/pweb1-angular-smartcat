import {Tarefa} from './tarefa';

export class Usuario {

  private _id: number;
  private _nome: string;
  private _email: string;
  private _tarefas: Tarefa[];

  constructor(id: number, nome: string, email: string, tarefas: Tarefa[] = []) {
    this._id = id;
    this._nome = nome;
    this._email = email;
    this._tarefas = tarefas;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get nome(): string {
    return this._nome;
  }

  set nome(value: string) {
    this._nome = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  // É a mesma coisa que "listarTarefas()"
  // get tarefas(): Tarefa[] {
  //   return this._tarefas;
  // }

  adicionarTarefa(tarefa: Tarefa): void {
    this._tarefas.push(tarefa);
  }

  listarTarefas(): Tarefa[] {
    return this._tarefas;
  }

  removerTarefa(tarefa: Tarefa): void {
    this._tarefas = this._tarefas.filter(
      t => t.titulo !== tarefa.titulo || t.data.getTime() !== tarefa.data.getTime()
    );
  }
}
