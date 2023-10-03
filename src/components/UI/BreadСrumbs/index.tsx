'use client';

import { FC} from 'react';
import styles from './breadCrumbs.module.scss';
import Link from 'next/link';

const convertBreadcrumb = (string: string) => {
    return string
      .replace(/-/g, ' ')
      .replace(/oe/g, 'ö')
      .replace(/ae/g, 'ä')
      .replace(/ue/g, 'ü')
      .toUpperCase();
  };


interface IProps {
    crumbs: {
        name: string,
        href: string
    }[]
}

interface IPath {
    breadcrumb: string, 
    href: string
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
                        <Link href={crumb.href}> {crumb.name}</Link>
                    </p>
                ))
            }
        </div>
    );
};

export default BreadCrumbs;


{/* <div className={styles.body}>
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
        </div> */}