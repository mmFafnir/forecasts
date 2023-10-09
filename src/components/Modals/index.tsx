
"use client";

import { FC, ReactNode, useEffect } from 'react';
import styles from './modal.module.scss';
import { ModalEnum, closeModal } from '@/GlobalRedux/Slices/modalSlice';
import { useTypeSelector } from '@/hooks/useTypeSelector';
import { useTypeDispatch } from '@/hooks/useTypeDispatch';
import { getScrollBarWidth } from '@/utils/getScrollBarWidth';


interface IProps {
    children: ReactNode,
    name: ModalEnum
}

const Modal:FC<IProps> = ({children, name}) => {    
    const { activeModal } = useTypeSelector(state => state.modal);
    const dispatch = useTypeDispatch();
    const onCloseModal = () => dispatch(closeModal())


    useEffect(() => {
        if(activeModal !== null) {
            document.body.classList.add('lock');
            document.body.style.paddingRight = getScrollBarWidth() + 'px';
        } else {
            document.body.classList.remove('lock');
            document.body.style.paddingRight = 0 + 'px';
        }
    }, [activeModal])

    return (
        <div 
            className={`${styles.modal} ${name === activeModal ? styles.active : ''}`}
            style={{paddingRight: `${activeModal !== null ? getScrollBarWidth() : 0}px`}}
        >
            <div onClick={onCloseModal} className={styles.bg}></div>
            <div className={styles.overflow}>
                <div className={styles.wrapper}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;