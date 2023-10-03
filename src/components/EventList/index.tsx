
"use client";

import React from 'react';
import styles from './eventList.module.scss';
import Select, { SelectClassEnum } from '../UI/Select';
import EventCard from '../EventCard';
import Modal from '../Modals';
import EventModal from '../Modals/EventModule';
import { ModalEnum } from '@/GlobalRedux/Slices/modalSlice';

const sort = [
    {
        title: 'Лучшие ставки',
        name: 'SortBy', 
    }, 
    {
        title: 'С большим кф',
        name: 'SortKF',
    },
    {
        title: 'С меньшим риском',
        name: 'SorRisk',
    }
    
]
const EventList = () => {


    return (
        <div className={styles.eventList}>
            <div className={styles.header}>
                <h2>Список событий</h2>
                <div className={styles.select}>
                    <Select icon='/img/sort.svg' classes={[SelectClassEnum.ABSOLUTE, SelectClassEnum.PURPLE]} items={sort.map(item => item.title)}/>
                </div>  
            </div>
            <div className={styles.body}>
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
            </div>
            <Modal name={ModalEnum.EVENT}>
                <EventModal />
            </Modal>
        </div>
    );
};

export default EventList;