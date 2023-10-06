"use client"
import { FC, ReactNode, useEffect, useState } from 'react'
import styles from './sidebar.module.scss';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

interface IProps {
  widgets: ReactNode[],
  slider?: boolean
}

const Sidebar:FC<IProps> = ({widgets, slider=false}) => {

  const [swiper, setSwiper] = useState<SwiperClass>();

  useEffect(() => {
    if(!swiper) return;
    // swiper.destroy()
  }, [])

  return (
    <div className={`${styles.sidebar} ${styles.slider}`}>
        <div className={styles.wrapper}>
          <div className={styles.sticky}>
            {
              !slider ? (
                <>
                  {
                    widgets.map(widget => (
                      widget
                    ))
                  }
                </>
              ) : (
                <div > 
                  <Swiper
                    className='sidebar-slider'
                    modules={[Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    onSwiper={setSwiper}
                    spaceBetween={50}
                    slidesPerView={1}
                    direction='horizontal'
                  >
                    {
                      widgets.map((widget, index) => (
                        <SwiperSlide key={index}>{widget}</SwiperSlide>
                      ))
                    }
                  </Swiper>
                </div>
              )
            }
          </div>
        </div>      
    </div>
  )
}

export default Sidebar 