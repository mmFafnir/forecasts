"use client";

import { FC } from 'react';
import styles from './socials.module.scss';

const Socials:FC = () => {
  return (
    <div className={styles.socials}>
        <a target='_blank' href="#">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M27.25 7H13.75C10.0221 7 7 10.0221 7 13.75V27.25C7 30.9779 10.0221 34 13.75 34H27.25C30.9779 34 34 30.9779 34 27.25V13.75C34 10.0221 30.9779 7 27.25 7Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20 25C22.7614 25 25 22.7614 25 20C25 17.2386 22.7614 15 20 15C17.2386 15 15 17.2386 15 20C15 22.7614 17.2386 25 20 25Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M28 13V13.0025" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </a>
        <a target='_blank' href="#">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M36.6668 6.68336C35.0002 7.50002 33.3668 7.83169 31.6668 8.33336C29.7985 6.22502 27.0285 6.10836 24.3668 7.10502C21.7052 8.10169 19.9618 10.5384 20.0002 13.3334V15C14.5918 15.1384 9.77516 12.675 6.66683 8.33336C6.66683 8.33336 -0.303171 20.7217 13.3335 26.6667C10.2135 28.745 7.10183 30.1467 3.3335 30C8.84683 33.005 14.8552 34.0384 20.0568 32.5284C26.0235 30.795 30.9268 26.3234 32.8085 19.625C33.3698 17.5878 33.6485 15.4831 33.6368 13.37C33.6335 12.955 36.1535 8.75002 36.6668 6.68169V6.68336Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </a>
        <a target='_blank' href="#">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.6665 16.6667V23.3333H16.6665V35H23.3332V23.3333H28.3332L29.9998 16.6667H23.3332V13.3333C23.3332 12.8913 23.5088 12.4674 23.8213 12.1548C24.1339 11.8423 24.5578 11.6667 24.9998 11.6667H29.9998V5H24.9998C22.7897 5 20.6701 5.87797 19.1073 7.44078C17.5445 9.00358 16.6665 11.1232 16.6665 13.3333V16.6667H11.6665Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </a>
        
    </div>
  )
}

export default Socials