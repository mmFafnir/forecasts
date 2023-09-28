"use client";
import React, { FC, useEffect, useId, useRef, useState } from 'react';
import styles from './select.module.scss';
import { Scrollbar } from 'react-scrollbars-custom';

interface IProps {
    items: string[]
}

const Select:FC<IProps> = ({items}) => {
    const id = useId();
    const [value, setValue] = useState<string>(items[0]);
    const [height, setHeight] = useState<number>(0);
    
    const bodyRef = useRef<HTMLDivElement|null>(null);

    const onOpenSelect = () => {
        if(!bodyRef.current) return;
        // const height = bodyRef.current.offsetHeight;
        
        setHeight(100);

    }
    const onCloseSelect = () => {
        setHeight(0);
    }
    
    useEffect(() => {

    }, [])

    return (
        <div ref={bodyRef} className={`${styles.select} select ${height > 0 ? styles.show : ''}`}>
            <button 
                className={styles.title}
                onClick={() => {
                    (height > 0) ? onCloseSelect() : onOpenSelect()            
                }}    
            >
                <span>{value}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M6 9L12 15L18 9" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
            <div className={styles.body} style={{maxHeight: `${height}px`}}>
                <Scrollbar style={{width: '100%', height: 100}}>
                    {items.map((item, index) => (
                        <button 
                            key={index} 
                            className={item == value ? styles.buttonActive : ''} 
                            onClick={() => setValue(item)}
                        >{item}</button>
                    ))}
                </Scrollbar>
            </div>
        </div>
    );
};

export default Select;