import React from 'react';
import { useState, useEffect } from 'react'
import { BsTrash, BsBookmarkCheck, BsBookmarkCheckFill } from 'react-icons/bs';
import { useTasks } from './context/ContextTasks';
import { MdDone } from "react-icons/md";
import MenuTask from './MenuTask';
import ShowTask from './ShowTask';
import styles from '../styles/createtask.module.css'

const API = "http://localhost:5000"

function CreateTask() {
    const { addTodo } = useTasks(); 
    const [title, setTitle] = useState("");
    const [time, setTime] = useState("");
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
            title,
            time: parseInt(time), // Certifique-se de que o tempo seja um número
            done: false,
        };
        try {
            const response = await fetch(API + "/todos", {
                method: "POST",
                body: JSON.stringify(todo),
                headers: {
                    "Content-Type": "application/json",
                },
            });
    
            if (!response.ok) {
                throw new Error("Erro ao criar a tarefa");
            }
    
            const newTodo = await response.json(); // Obtenha a nova tarefa criada do backend
    
            addTodo(newTodo); // Adicionar a nova tarefa ao contexto
    
            setTitle("");
            setTime("");
    
            console.log(newTodo);
        } catch (error) {
            console.error(error);
            setTaskDone(false); // Você pode tratar erros de maneira mais elaborada
        }
    };

    if (loading) {
        return <p>Loading...</p>; // Você pode adicionar um loader aqui
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
