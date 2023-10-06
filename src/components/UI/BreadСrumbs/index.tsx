'use client';

import { FC} from 'react';
import styles from './breadCrumbs.module.scss';
import Link from 'next/link';


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
            {
                crumbs.map(crumb => (
                    // <p key={crumb.name}>
                        <Link key={crumb.href} href={crumb.href}>
                            {crumb.name}
                        </Link>
                    // </p>
                ))
            }
            </p>

        </div>
    );
};

export default BreadCrumbs;
