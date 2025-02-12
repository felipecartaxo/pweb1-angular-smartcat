export class Tarefa {
    constructor(
        private _titulo: string,
        private _descricao: string = '',
        private _concluida: boolean = false
    ) {}

    get titulo(): string {
        return this._titulo;
    }

    set titulo(value: string) {
        if (!value.trim()) throw new Error('O título não pode ser vazio.');
        this._titulo = value;
    }

    get descricao(): string {
        return this._descricao;
    }

    set descricao(value: string) {
        this._descricao = value;
    }

    get concluida(): boolean {
        return this._concluida;
    }

    set concluida(value: boolean) {
        this._concluida = value;
    }

    toggleConcluida() {
        this._concluida = !this._concluida;
    }
}
