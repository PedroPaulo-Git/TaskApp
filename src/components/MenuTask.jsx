import React from "react";
import styles from '../styles/menu.module.css';
import { BsBookmarkCheck } from 'react-icons/bs';
function MenuTask() {
    return ( 
        <div>
            <div className={styles.menuContainer}>
                <span> <BsBookmarkCheck /></span>
                <span> <BsBookmarkCheck /></span>
                <span> <BsBookmarkCheck /></span>
                <span> <BsBookmarkCheck /></span>
                <span> <BsBookmarkCheck /></span>
            </div>
        </div>
     );
}

export default MenuTask;