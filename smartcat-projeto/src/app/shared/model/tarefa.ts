export class Tarefa {

  private _titulo: string;
  private _descricao: string;
  private _nivelDificuldade: number;
  private _data: Date;

  constructor(titulo: string, descricao: string, nivelDificuldade: number, data: Date) {
    this._titulo = titulo;
    this._descricao = descricao;
    this._nivelDificuldade = nivelDificuldade;
    this._data = data;
  }

  get titulo(): string {
    return this._titulo;
  }

  set titulo(value: string) {
    this._titulo = value;
  }

  get descricao(): string {
    return this._descricao;
  }

  set descricao(value: string) {
    this._descricao = value;
  }

  get nivelDificuldade(): number {
    return this._nivelDificuldade;
  }

  set nivelDificuldade(value: number) {
    this._nivelDificuldade = value;
  }

  get data(): Date {
    return this._data;
  }

  set data(value: Date) {
    this._data = value;
  }
}
