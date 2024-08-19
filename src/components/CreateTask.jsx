import React from 'react';
import { useState, useEffect } from 'react'
import { BsTrash, BsBookmarkCheck, BsBookmarkCheckFill } from 'react-icons/bs';
import { MdDone } from "react-icons/md";
import MenuTask from './MenuTask';
import ShowTask from './ShowTask';
import styles from '../styles/createtask.module.css'

const API = "http://localhost:5000"

function CreateTask() {
    const [title, setTitle] = useState("");
    const [time, setTime] = useState("");
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [taskDone,setTaskDone] = useState(false)


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
        setTaskDone(true) 
        const timer = setTimeout(() => {
            setTaskDone(false) 
        }, 2000);
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

    
    
    if (loading) {
        return ;
    }

    return (
        <main className={styles.mainContainer}>
            <MenuTask />
            <div className={styles.createTask_Create_Notification_container}>{taskDone ?? false ?<div className={styles.createTask_Create_Notification}><MdDone /><p>Sua tarefa foi criada com sucesso !</p> <span onClick={()=>{setTaskDone(false)}}> OK </span></div>  :"" }</div>
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
                        <input onClick={()=>{}} className={styles.button} type="submit" value="Criar tarefa" />
                    </form>
                </div>
            </div>

        </main>
    );

};
export default CreateTask;
