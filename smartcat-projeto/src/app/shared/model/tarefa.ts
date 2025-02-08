export class Tarefa {
  constructor(
    private _titulo: string,
    private _descricao: string,
    // private _nivelDificuldade: number = 3, // 3 = Dificuldade Média
    // private _data: Date = new Date(),
    // private _concluida: boolean = false // Por padrão, toda atividade criada estará, obviamente, incompleta
  ) {
    // if (!this._titulo.trim()) throw new Error("O título não pode ser vazio.");
    // if (this._nivelDificuldade < 1 || this._nivelDificuldade > 5)
    //   throw new Error("O nível de dificuldade deve estar entre 1 e 5.");
    // if (isNaN(this._data.getTime())) throw new Error("Data inválida.");
  }

  get titulo(): string {
    return this._titulo;
  }

  set titulo(value: string) {
    if (!value.trim()) throw new Error("O título não pode ser vazio.");
    this._titulo = value;
  }

  get descricao(): string {
    return this._descricao;
  }

  set descricao(value: string) {
    this._descricao = value;
  }

  // get nivelDificuldade(): number {
  //   return this._nivelDificuldade;
  // }
  //
  // set nivelDificuldade(value: number) {
  //   if (value < 1 || value > 5) {
  //     throw new Error("O nível de dificuldade deve estar entre 1 e 5.");
  //   }
  //   this._nivelDificuldade = value;
  // }
  //
  // get data(): Date {
  //   return this._data;
  // }
  //
  // set data(value: Date) {
  //   if (isNaN(value.getTime())) throw new Error("Data inválida.");
  //   this._data = value;
  // }
  //
  // get concluida(): boolean {
  //   return this._concluida;
  // }
  //
  // set concluida(value: boolean) {
  //   this._concluida = value;
  // }
  //
  // toString(): string {
  //   return `Tarefa: ${this._titulo} - ${this._descricao} (Dificuldade: ${this._nivelDificuldade})`;
  // }
}
