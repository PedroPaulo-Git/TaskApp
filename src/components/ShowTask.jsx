import MenuTask from './MenuTask';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import styles from '../styles/showtask.module.css'
import { BsSliders2Vertical, BsTrash, BsBookmarkCheck, BsBookmarkCheckFill, BsCheck2Circle, BsDashCircle, BsClockHistory, BsSlashCircle } from 'react-icons/bs';
import { PiDotsSixBold } from 'react-icons/pi'
import { GiCheckMark } from 'react-icons/gi'

function ShowTask() {
    const API = 'http://localhost:3000';

    const [title, setTitle] = useState("");
    const [time, setTime] = useState("");
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(false);

    // useEffect(() => {

    //     const loadData = async () => {

    //         setLoading(true);

    //         const res = await fetch(API + "/todos")
    //             .then((res) => res.json())
    //             .then((data) => data)
    //             .catch((err) => console.log(err));

    //         setLoading(false);
    //         setTodos(res);


    //     };
    //     loadData();
    // }, [])

    // const handleEdit = async (todo) => {

    //     todo.done = !todo.done;

    //     const data = await fetch(API + "/todos/" + todo.id, {
    //         method: "PUT",
    //         body: JSON.stringify(todo),
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //     });
    //     setTodos((prevState) => prevState.map((t) =>
    //         (t.id === (data.id) ? (t = data) : t)));


    // };
    // const handleDelete = async (id) => {

    //     await fetch(API + "/todos/" + id, {
    //         method: "DELETE",
    //     });
    //     setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
    //     alert("Tarefa excluída com sucesso!");
    // };


    return (

        <main className={styles.mainContainer}>
            <MenuTask />
            <div className={styles.createTask_Container}>
                <div className={styles.createTask_Container_top}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '50%' }}>
                        <h1>Tasks</h1>
                        <div style={{ marginRight: "13px" }}>
                            <BsSliders2Vertical style={{}} />
                            <PiDotsSixBold style={{ marginLeft: "10px" }} />
                        </div>
                    </div>
                    <Link to={'/'}><input className={styles.button} type="submit" value="Nova Tarefa" /></Link>
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
                                <div>
                                {todo.done === false ? 
                                    <div>
                                    <div className={styles.todo} key={todo.id}>
                                    {console.log(todo.id)}
                                    <h3>{todo.title}</h3>
                                    <p className={styles.pDuracao}>Duração:{todo.time}{todo.time <= 1 ? "hr" : "hrs"}</p>

                                    <span className={styles.svg_time} onClick={() => handleEdit(todo)}>
                                        {!todo.done ? ( <GiCheckMark style={{}} /> )
                                        : 
                                       todo.time = "null" }
                                    </span>

                                    <span  className={styles.svg_delete}>
                                    <BsTrash onClick={() =>
                                        handleDelete(todo.id)

                                    } />
                                    </span>
                                </div>
                                </div> 
                                : null}

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

                            {console.log(todos)}

                            {
                                todos.some((todo) => todo.done === true) ? (
                                    <div>
                                        {todos.map((todo) => (
                                            <div key={todo.id}>
                                                {todo.done === true ? (
                                                    <div className={styles.todo}>
                                                        <h3 className={todo.done ? "todo-done" : ""}>{todo.title}</h3>
                                                        <p className={styles.pDuracao}>Duração: {todo.time} {todo.time <= 1 ? "hr" : "hrs"}</p>
                                                        {!todo.done ? <BsBookmarkCheckFill /> : ''}
                                                    </div>
                                                ) : null}
                                               
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p>Não há tarefas concluídas</p>
                                )
                            }



                        </div>
                    </div>

                </div>


            </div>

        </main>
    );
}

export default ShowTask;