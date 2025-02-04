import {Usuario} from './usuario';
import {Tarefa} from './tarefa';

export const USUARIOS: Usuario[] = [
  new Usuario(1, 'João Silva', 'joao.silva@email.com', [
    new Tarefa('Tarefa 1', 'Descrição da Tarefa 1'),
    new Tarefa('Tarefa 2', 'Descrição da Tarefa 2', 4)
  ]),
  new Usuario(2, 'Maria Oliveira', 'maria.oliveira@email.com', [
    new Tarefa('Tarefa 3', 'Descrição da Tarefa 3', 2),
    new Tarefa('Tarefa 4', 'Descrição da Tarefa 4', 5, new Date('2023-11-01'))
  ]),
  new Usuario(3, 'Carlos Santos', 'carlos.santos@email.com', [
    new Tarefa('Tarefa 5', 'Descrição da Tarefa 5', 1),
    new Tarefa('Tarefa 6', 'Descrição da Tarefa 6', 3, new Date('2023-11-15'), true)
  ])
];
