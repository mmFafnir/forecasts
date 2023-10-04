"use client"

import { closeModal } from '@/GlobalRedux/Slices/modalSlice';
import { useTypeDispatch } from '@/hooks/useTypeDispatch';
import {FC, useEffect} from 'react';

const EventModule:FC = () => {
    const dispatch = useTypeDispatch();

    useEffect(() => {
        console.log('event')
        document.addEventListener('keydown', (e) => {
            if(e.key === "Escape") dispatch(closeModal());
        })
    }, [])
    
    return (
        <></>
    );
};

export default EventModule;