import { FC } from 'react';
import styles from './breadCrumbs.module.scss';
import Link from 'next/link';
import { links } from '@/data/links';

interface IProps {
    crumbs: {
        name: string,
        href: string
    }[]
}

const BreadCrumbs:FC<IProps> = ({crumbs}) => {
    return (
        <div className={styles.body}>
            <p>
                <Link href={'/'}>Прогнозы</Link>
            </p>
            {
                crumbs.map(crumb => (
                    <p key={crumb.name}>
                        <Link href={crumb.href}>{crumb.name}</Link>
                    </p>
                ))
            }
        </div>
    );
};

export default BreadCrumbs;