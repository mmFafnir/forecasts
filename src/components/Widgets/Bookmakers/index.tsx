'use client';

import { FC, useEffect, useState } from 'react'
import styles from './bookmakers.module.scss';
import WidgetWrapper from '../../UI/WidgetWrapper';
import Image from 'next/image';
import { useTypeSelector } from '@/hooks/useTypeSelector';

const array = [1, 2, 3, 4, 5]
const Bookmakers:FC = () => {

  const { light } = useTypeSelector(state => state.themeLight);
  const [src, setSrc] = useState<string>('/img/mostbet.png');
  const [presentSrc, setPresentSrc] = useState<string>('/img/present.svg')

  useEffect(() => {
    setSrc(light ? '/img/mostbet-dark.png' : '/img/mostbet.png');
    setPresentSrc(light ? '/img/present-dark.svg' : '/img/present.svg')
  }, [light])

  return (
    <WidgetWrapper title='Топ букмекеры' imgs={['img/widget/top.svg', 'img/widget/top-dark.svg']}>
        <div className={`${styles.bookmakers} ${light ? styles.themeLight : ''}`}>
            {
                array.map(num => (
                    <div key={num} className={styles.item}>
                        <div>
                            <Image 
                                src={src}
                                alt='Mostbet'
                                width={72}
                                height={12}
                            />

                            <p>
                                <Image 
                                    src={presentSrc}
                                    alt='иконка подарка'
                                    width={14}
                                    height={14}
                                />  
                                <span>25000 ₽</span>
                            </p>

                        </div>
                        <a className='btn btn--pur' target='_blank' href={'/'}>
                            <span>На сайт</span>
                        </a>
                    </div>
                ))
            }
        </div>
    </WidgetWrapper>
  )
}

export default Bookmakers