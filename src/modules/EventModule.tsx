"use client"

import { closeModal } from '@/GlobalRedux/Slices/modalSlice';
import { useTypeDispatch } from '@/hooks/useTypeDispatch';
import { useTypeSelector } from '@/hooks/useTypeSelector';
import {FC, useEffect} from 'react';

const EventModule:FC = () => {
    const dispatch = useTypeDispatch();
    const { light } = useTypeSelector(state => state.themeLight);

    useEffect(() => {
        console.log('event')
        document.addEventListener('keydown', (e) => {
            if(e.key === "Escape") dispatch(closeModal());
        })
    }, [])
    
    useEffect(() => {
        if(light) {

            document.body.classList.add('theme-light')
        } else {
            document.body.classList.remove('theme-light')
        }
    }, [light])

    return (
        <></>
    );
};

export default EventModule;