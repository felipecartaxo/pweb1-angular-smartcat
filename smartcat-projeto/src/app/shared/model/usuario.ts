export class Usuario {

  private _id: number;
  private _nome: string;
  private _email: string;
  private _tarefas: string[];

  constructor(id: number, nome: string, email: string, tarefas: string[] = []) {
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

  get tarefas(): string[] {
    return this._tarefas;
  }

  // adicionarTarefa(tarefa: string): void {
  //   this._tarefas.push(tarefa);
  // }
  //
  // listarTarefas(): string[] {
  //   return this._tarefas;
  // }
  //
  // removerTarefa(tarefa: string): void {
  //   this._tarefas = this._tarefas.filter(t => t !== tarefa);
  // }
}
