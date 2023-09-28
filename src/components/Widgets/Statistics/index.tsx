import { FC } from 'react';
import WidgetWrapper from '../../UI/WidgetWrapper';
import styles from './statistics.module.scss';

type TStatistic = {
    color: string,
    title: string,
    value: string,
    subTitle: string,
    subValue: string,
} 
const statistics:TStatistic[] = [
    {
        color: "#FFD644",
        title: 'Всего',
        value: '150/170',
        subTitle: 'Лучшие:',
        subValue: '55/75',
    },
    {
        color: "#66DA64",
        title: 'С низким риском:',
        value: '50/50',
        subTitle: 'Средний коэф:',
        subValue: '1.45',
    },
    {
        color: "#E88224",
        title: 'Средний риск:',
        value: '45/50',
        subTitle: 'Средний коэф:',
        subValue: '1.85',
    },
    {
        color: "#FFD644",
        title: 'Высокий риск:',
        value: '35/50',
        subTitle: 'Средний коэф::',
        subValue: '2.30',
    },
]

const Statistics:FC = () => {
    return (
        <WidgetWrapper title='Статистика' img='img/statistics.svg' >
            <div className={styles.body}>
                {
                    statistics.map((stat, index) => (
                        <div key={index} className={styles.item}>
                            <p style={index > 0 ? {color: stat.color} : {}}>
                                <span>{stat.title}</span>
                                <span>{stat.value}</span>
                            </p>
                            <p style={index ==0 ? {color: stat.color} : {}}>
                                <span>{stat.subTitle}</span>
                                <span>{stat.subValue}</span>
                            </p>
                        </div>    

                    ))
                }
            </div>
        </WidgetWrapper>
    );
};

export default Statistics;