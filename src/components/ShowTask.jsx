import MenuTask from './MenuTask';
import { useState, useEffect } from 'react'
import styles from '../styles/showtask.module.css'
import { BsTrash, BsBookmarkCheck, BsBookmarkCheckFill } from 'react-icons/bs';


function ShowTask() {
    const API = "http://localhost:5000"

    const [title, setTitle] = useState("");
    const [time, setTime] = useState("");
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        const loadData = async () => {

            setLoading(true);

            const res = await fetch(API + "/todos")
                .then((res) => res.json())
                .then((data) => data)
                .catch((err) => console.log(err));

            setLoading(false);
            setTodos(res);


        };
        loadData();
    }, [])

    const handleEdit = async (todo) => {

        todo.done = !todo.done;

        const data = await fetch(API + "/todos/" + todo.id, {
            method: "PUT",
            body: JSON.stringify(todo),
            headers: {
                "Content-Type": "application/json",
            },
        });
        setTodos((prevState) => prevState.map((t) =>
            (t.id === (data.id) ? (t = data) : t)));


    };
    const handleDelete = async (id) => {

        await fetch(API + "/todos/" + id, {
            method: "DELETE",
        });
        setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
        alert("Tarefa excluída com sucesso!");
    };


    return (

        <main className={styles.mainContainer}>
            <MenuTask />
            <div className={styles.createTask_Container}>
                <div className={styles.createTask_Container_top}>
                    <h1>Tasks</h1>
                </div>
<div className={styles.todoContainer_main}>
  <h2 style={{ fontSize: '18px' }}>Para Fazer:</h2>
                <div className={styles.todoContainer}>
                  
                    {todos.length === 0 && <p>Não há tarefas</p>}
                    
                    {todos.map((todo) => (

                        <div className={styles.todo} key={todo.id}>

                            <h3 className={todo.done ? "todo-dobe" : ""}>{todo.title}</h3>
                            <p className={styles.pDuracao}>Duração:{todo.time}{todo.time <= 1 ? "hr" : "hrs"}</p>
                            <span onClick={() => handleEdit(todo)}>
                                {!todo.done ? <BsBookmarkCheck /> : <BsBookmarkCheckFill />}
                            </span>
                            <BsTrash onClick={() =>
                                handleDelete(todo.id)

                            } />
                        </div>
                    ))}
                </div>
                </div>
            </div>

        </main>
    );
}

export default ShowTask;