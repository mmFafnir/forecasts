
"use client";
import { FC, ReactNode } from 'react';
import styles from './modal.module.scss';
import { ModalEnum, closeModal } from '@/GlobalRedux/Slices/modalSlice';
import { useTypeSelector } from '@/hooks/useTypeSelector';
import { useTypeDispatch } from '@/hooks/useTypeDispatch';


interface IProps {
    children: ReactNode,
    name: ModalEnum
}

const Modal:FC<IProps> = ({children, name}) => {    
    const { activeModal } = useTypeSelector(state => state.modal)
    const dispatch = useTypeDispatch();
    const onCloseModal = () => dispatch(closeModal())

    return (
        <div className={`${styles.modal} ${name === activeModal ? styles.active : ''}`}>
            <div onClick={onCloseModal} className={styles.bg}></div>
            <div className={styles.wrapper}>
                {children}
            </div>
        </div>
    );
};

export default Modal;