import React from "react";
import { Link } from "react-router-dom";
import styles from '../styles/menu.module.css';
import { BsBookmarkCheck } from 'react-icons/bs';
import { VscInbox } from 'react-icons/vsc'
import { IoCreateOutline } from 'react-icons/io5'
import { GoTasklist } from 'react-icons/go'
import { LuCalendarClock } from 'react-icons/lu';
import { AiOutlineUser } from 'react-icons/ai'

function MenuTask() {
    return ( 
        <div>
            <div className={styles.menuContainer}>
                <span> <VscInbox /></span>
                <div className={styles.menuContainer_mid}>
                <Link to={'/calendar'}><span> <LuCalendarClock /></span></Link>
                <Link to={'/tasks'}><span> <GoTasklist /></span></Link>
                <Link to={'/'}> <span> <IoCreateOutline /></span></Link>
                </div>
                <span style={{borderBottom:"none",bottom:0}}> <AiOutlineUser /></span>
            </div>
        </div>
     );
}

export default MenuTask;