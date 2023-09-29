import { FC } from 'react'
import styles from './bookmakers.module.scss';
import WidgetWrapper from '../../UI/WidgetWrapper';
import Image from 'next/image';

const array = [1, 2, 3, 4, 5]
const Bookmakers:FC = () => {
  return (
    <WidgetWrapper title='Топ букмекеры' img='img/top.svg'>
        <div className={styles.bookmakers}>
            {
                array.map(num => (
                    <div key={num} className={styles.item}>
                        <div>
                            <Image 
                                src={'/img/mostbet.png'}
                                alt='Mostbet'
                                width={72}
                                height={12}
                            />

                            <p>
                                <Image 
                                    src={'/img/present.svg'}
                                    alt='иконка подарка'
                                    width={14}
                                    height={14}
                                />  
                                <span>25000 ₽</span>
                            </p>

                        </div>
                        <a className='btn btn--pur' target='_blank' href={'/'}>
                            <span>
                                На сайт
                            </span>
                        </a>
                    </div>
                ))
            }
        </div>
    </WidgetWrapper>
  )
}

export default Bookmakers