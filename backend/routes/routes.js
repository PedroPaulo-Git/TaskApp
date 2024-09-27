import { Router } from 'express';
const router = Router();

router.get('/task', (req, res) => {
  res.json({ message: 'API funcionando!' });
});

const todos = [
    { id: 1, task: 'Lavar a louça', done: false },
    { id: 2, task: 'Fazer compras', done: true },
  ];
    const loadData = async () => {

        setLoading(true);

        const res = await fetch(API + "/todos")
            .then((res) => res.json())
            .then((data) => data)
            .catch((err) => console.log(err));

        setLoading(false);
        setTodos(res);


    };

    router.get('/todos', (req, res) => {
        res.json(todos);
      });


router.put('/todos/:id', (req, res) => {
    const { id } = req.params;
    const todo = todos.find(t => t.id === parseInt(id));
  
    if (todo) {
      todo.done = !todo.done;  // Marca como feito ou não
      res.json(todo);
    } else {
      res.status(404).json({ message: 'Tarefa não encontrada' });
    }
  });


router.delete('/todos/:id', (req, res) => {
  const { id } = req.params;
  const index = todos.findIndex(t => t.id === parseInt(id));

  if (index !== -1) {
    todos.splice(index, 1);  // Remove a tarefa
    res.json({ message: 'Tarefa excluída com sucesso' });
  } else {
    res.status(404).json({ message: 'Tarefa não encontrada' });
  }
});

export default router;