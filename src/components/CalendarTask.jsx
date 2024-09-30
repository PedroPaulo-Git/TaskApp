import styles from '../styles/calendartask.module.css'
import MenuTask from './MenuTask';
import { Link } from "react-router-dom";


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
                <Link to={'/'}><input className={styles.button} type="submit" value="Nova Tarefa" /></Link>
                <iframe  className={styles.calendar} src="https://calendar.google.com/calendar/embed?" ></iframe>
                </div>
            </div>

        </main>
        </div>
     );
}

export default CalendarTask;