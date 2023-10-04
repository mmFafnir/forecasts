"use client";
import { usePathname } from 'next/navigation'
import { FC, useEffect, useRef, useState } from 'react'
import styles from './header.module.scss';
import Logo from '../UI/Logo';
import Search from '../UI/Search';
import PersonIcon from '../UI/Icons/PersonIcon';
import SettingIcon from '../UI/Icons/SettingIcon';
import StarIcon from '../UI/Icons/StarIcon';
import { links } from '../../assets/data/links';
import Link from 'next/link';
import Settings from '../Settings';
import Modal from '../Modals';
import { ModalEnum, openModal } from '@/GlobalRedux/Slices/modalSlice';
import { useTypeDispatch } from '@/hooks/useTypeDispatch';
import LoginModal from '../Modals/LoginModal';
import { AdaptiveMenu } from '@/assets/scripts/adaptiveMenuLinks';
import Submenu from '../UI/Submenu';


const Header:FC = () => {
    
    const pathname = usePathname();
    const dispatch = useTypeDispatch();



    const menuRef = useRef<HTMLDivElement|null>(null)

    const [isMore, setIsMore] = useState<boolean>(false);
    const [isOpenSettings, setIsOpenSettings] = useState<boolean>(false);
    

    const onOpenModalLogin = () => dispatch(openModal(ModalEnum.LOGIN));
    const onOpenModalSubmenu = () => dispatch(openModal(ModalEnum.SUBMENU));
    
    useEffect(() => {
        if(!menuRef.current) return;
        new AdaptiveMenu(menuRef.current);
    }, [])

    return (
        <>
            <header className={styles.header}>
                <div className={`${styles.wrapper} container`}>
                    <div className={styles.top}>
                        <div className={styles.logo}>
                            <Logo />
                        </div>
                        <div className={styles.search}>
                            <Search/>
                        </div>
                        <div className={styles.icons}>
                            <button onClick={onOpenModalLogin}>
                                <PersonIcon />
                            </button>
                            <button onClick={() => setIsOpenSettings(prev => !prev)}>
                                <SettingIcon />
                            </button>
                        </div>
                    </div>
                    <div className={styles.bottom}>
                        <Link href={'/favorites'} className={styles.favoritesBtn}>
                            <StarIcon />
                            <span>Избранное</span>
                        </Link>
                        <div ref={menuRef} className={styles.menu}>
                            {
                                links.filter((a, i) => i !== 0).map((link, index) => (
                                    <Link className={`btn ${pathname === link.href ? 'active' : ''}`} href={link.href} key={index}>
                                        {false ? <span className='btn__action'>3</span> : null}
                                        {link.svg}
                                        <span>{link.name}</span>
                                    </Link>
                                ))
                            }
                        </div>
                        <button className='sub-menu-open' onClick={onOpenModalSubmenu}>Еще</button>
                    </div>
                    <Submenu />
                    <Settings setOpen={setIsOpenSettings} open={isOpenSettings}/>
                </div>
            </header>
            <Modal name={ModalEnum.LOGIN}>
                <LoginModal />
            </Modal>
        </>
        
    )
}

export default Header