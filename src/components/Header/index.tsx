import { FC } from 'react'
import styles from './header.module.scss';
import { ModalEnum} from '@/GlobalRedux/Slices/modalSlice';
import LoginModal from '../Modals/LoginModal';
import HeaderBottom from './components/HeaderBottom';
import HeaderTop from './components/HeaderTop';
import Modal from '../Modals';


const Header:FC = () => {
    return (
        <>
            <header className={styles.header}>
                <div className={`${styles.wrapper} container`}>
                    <HeaderTop />
                    <HeaderBottom />
                </div>
            </header>
            <Modal name={ModalEnum.LOGIN}>
                <LoginModal />
            </Modal>
        </>   
    )
}

export default Header