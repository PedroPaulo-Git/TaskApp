import styles from '../styles/calendartask.module.css'
import MenuTask from './MenuTask';


function CalendarTask() {
    return ( 
        <div>
            <main className={styles.mainContainer}>
            <MenuTask />
           
            <div className={styles.createTask_Container}>
                <div className={styles.createTask_Container_top}>
                    <h1>Calendario</h1>
                </div>
                <div className={styles.createTask_Container_forms}>
                <input className={styles.button} type="submit" value="Criar tarefa" />
                </div>
            </div>

        </main>
        </div>
     );
}

export default CalendarTask;