export class Tarefa {

    public id?: string

    constructor(
        public titulo: string,
        public descricao: string,
        public concluida: boolean = false

    ) {}

    toggleConcluida() {
        this.concluida = !this.concluida;
    }
}
