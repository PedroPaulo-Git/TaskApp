import React from 'react';
import { useState, useEffect } from 'react'
import { BsTrash, BsBookmarkCheck, BsBookmarkCheckFill } from 'react-icons/bs';
import MenuTask from './MenuTask';
import styles from '../styles/createtask.module.css'

const API = "http://localhost:5000"

function CreateTask() {
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



    const handleSubmit = async (e) => {
        e.preventDefault();
        const todo = {
            id: Math.random(),
            title,
            time,
            done: false,

        }
        await fetch(API + "/todos", {
            method: "POST",
            body: JSON.stringify(todo),
            headers: {
                "Content-Type": "application/json",
            },
        });

        setTodos((prevState) => [...prevState, todo]);



        console.log(todo)
        setTime("");
        setTitle("");

    };

    const handleDelete = async (id) => {

        await fetch(API + "/todos/" + id, {
            method: "DELETE",
        });
        setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
        alert("Tarefa excluída com sucesso!");
    };

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

    if (loading) {
        return <p>Carregando...</p>;
    }







    return (
        <main className={styles.mainContainer}>
            <MenuTask />
            <div className={styles.createTask_Container}>
                <div className={styles.createTask_Container_top}>
                    <h1>Create Task</h1>
                </div>
                <div className={styles.createTask_Container_forms}>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.forms_Control}>
                            <label className={styles.forms_Control_Label} htmlFor='title'>O que voce vai fazer?</label><br />

                            <input
                            className={styles.forms_Input}  
                                type='text' name="title"
                                placeholder='Titulo da tarefa'
                                onChange={(e) =>
                                    setTitle(e.target.value)}
                                value={title || ""}
                                required
                            />
                        </div>

                        <div className={styles.forms_Control}>
                            <label className={styles.forms_Control_Label} htmlFor='time'>Duração :</label><br />
                            <input
                            className={styles.forms_Input}
                                type='text' name="time"
                                placeholder='Tempo estimado (em horas)'
                                onChange={(e) =>
                                    setTime(e.target.value)}
                                value={time || ""}
                                required
                            />
                        </div>
                        <input className={styles.button} type="submit" value="Criar tarefa" />
                    </form>
                </div>
            </div>

        </main>
    );

};
export default CreateTask;
