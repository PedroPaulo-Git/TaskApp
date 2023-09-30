import MenuTask from './MenuTask';
import { useState, useEffect } from 'react'
import styles from '../styles/showtask.module.css'
import { BsSliders2Vertical, BsTrash, BsBookmarkCheck, BsBookmarkCheckFill, BsCheck2Circle, BsDashCircle, BsClockHistory, BsSlashCircle } from 'react-icons/bs';
import { PiDotsSixBold } from 'react-icons/pi'

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
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '47.3%' }}>
                        <h1>Tasks</h1>
                        <div style={{}}>
                        <BsSliders2Vertical style={{ marginLeft: "10px" }} />
                        <PiDotsSixBold style={{ marginLeft: "10px" }}/>
                        </div>
                    </div>
                    <input className={styles.button} type="submit" value="Nova Tarefa" />
                </div>

                <div className={styles.todo_main}>
                    <div className={styles.todoContainer_main}>
                        <div className={styles.todoContainer_top}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <h2 style={{ fontSize: '18px' }}>Para Fazer</h2>
                                <BsSlashCircle style={{ color: "blue" }} />
                            </div>
                            <PiDotsSixBold style={{ left: '0', position: 'relative' }} />
                        </div>
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


                    <div className={styles.todoContainer_main}>
                    <div className={styles.todoContainer_top}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <h2 style={{ fontSize: '18px' }}>Feito</h2>
                                <BsCheck2Circle style={{ color: "green" }} />
                            </div>
                            <PiDotsSixBold style={{ left: '0', position: 'relative' }} />
                        </div>
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


            </div>

        </main>
    );
}

export default ShowTask;