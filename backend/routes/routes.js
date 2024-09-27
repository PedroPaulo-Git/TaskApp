
import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();
// const todos = [
//     { id: 1, task: 'Lavar a louça', done: false },
//     { id: 2, task: 'Fazer compras', done: true },
// ];

router.get('/', (req, res) => {
    res.send('API está funcionando'); // ou outra lógica para servir seu frontend
  });

  
// Rota para obter todas as tarefas
router.get('/todos', async (req, res) => {
    try {
        const todos = await prisma.todos.findMany(); // Buscando tarefas no banco de dados
        res.json(todos); // Retorne as tarefas encontradas
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Erro ao obter tarefas' });
    }
});


router.post('/todos', async (req, res) => {
    const { title, time, done } = req.body;

    try {
        const newTodo = await prisma.todos.create({
            data: {
                title,
                time: parseInt(time), // Converta time para inteiro
                done,
            },
        });
        return res.status(201).json(newTodo); // Retorne a nova tarefa criada
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Erro ao criar a tarefa' });
    }
});


// Rota para editar uma tarefa
router.put('/todos/:id', async (req, res) => {
    const { id } = req.params;
    const { done } = req.body; // Assumindo que você passará o novo estado "done"

    try {
        const updatedTodo = await prisma.todos.update({
            where: { id: parseInt(id) }, // Assumindo que id é um campo do tipo Int
            data: { done },
        });
        res.json(updatedTodo);
    } catch (error) {
        console.error(error);
        res.status(404).json({ message: 'Tarefa não encontrada' });
    }
});

// Rota para excluir uma tarefa
router.delete('/todos/:id', async (req, res) => {
    const { id } = req.params;

    try {
        await prisma.todos.delete({
            where: { id: parseInt(id) }, // Assumindo que id é um campo do tipo Int
        });
        res.json({ message: 'Tarefa excluída com sucesso' });
    } catch (error) {
        console.error(error);
        res.status(404).json({ message: 'Tarefa não encontrada' });
    }
});


export default router;
