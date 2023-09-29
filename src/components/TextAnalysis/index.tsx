"use client";

import { FC, useEffect, useRef, useState } from 'react';
import styles from './textAnalysis.module.scss';


const defaultHeight = 81; 
const TextAnalysis:FC = () => {
    const refParagraph = useRef<HTMLParagraphElement|null>(null)
    const [height, setHeight] = useState<number>(defaultHeight);
    const [isFull, setIsFull] = useState<boolean|null>(false)
    const onOpenText = () => {
        if(!refParagraph.current) return;
        setHeight(refParagraph.current.offsetHeight);
    }

    useEffect(() => {
        setIsFull(
            refParagraph.current && refParagraph.current.offsetHeight <= defaultHeight
        )
    }, [])

    console.log(isFull)


    return (
        <div className={styles.analysis}>
            <div className={styles.wrapper}>
                <h3>Анализ:</h3>
                <div className={styles.text} style={{height: isFull ? 'auto' : height + 'px'}}>
                    <p ref={refParagraph}>
                        В последнее время Галатасарай (Galatasaray) демонстрирует впечатляющую форму. В последних пяти матчах было одержано четыре победы, включая важнейшую победу в отборочном турнире Лиги чемпионов. Недавняя победа над Самсунспором со счетом 4:2 свидетельствует о том, что команда находится в хорошей атакующей форме и сумела забить несколько мячей. Кроме того, в некоторых матчах Галатасарай доминирует при розыгрыше угловых, что может свидетельствовать о его прессинге и атакующем потенциале.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor fuga a deserunt porro maxime inventore. Perferendis qui quas sapiente temporibus eius laboriosam veniam rem, placeat, sint harum consequatur vero deleniti.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, est. Exercitationem maxime impedit magnam beatae consectetur totam debitis possimus libero rem quas necessitatibus ducimus aspernatur, modi tempora saepe officia distinctio!
                    </p>
                </div>
            </div>
            {
                !isFull && (
                    <button onClick={() => height <= defaultHeight ? onOpenText() : setHeight(defaultHeight)}>
                        {height > defaultHeight ? 'Скрыть.' : 'Читать полность.'}                
                    </button>
                ) 
            }
        </div>
    );
};

export default TextAnalysis;