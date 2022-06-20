import React from 'react';
import styles from './AppHeader.module.css'
import { Logo, BurgerIcon, ListIcon, ProfileIcon, Tab } from '@ya.praktikum/react-developer-burger-ui-components';
function AppHeader() {


  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.block}>
          <div  style ={{display:'flex'}} className='mb-4 mt-4 pb-4 pt-4 pr-5'>
            <BurgerIcon />
            <p className="text text_type_main-default block ml-2">Конструктор</p>
          </div>
          <div style ={{display:'flex'}} className='mb-4 mt-4 ml-2 pb-4 pt-4 pl-5 pr-5' >
            <ListIcon type="secondary" />
            <p className="text text_type_main-default text_color_inactive ml-2">Лента заказов</p>
          </div>
        </div>
        <Logo />
        <div style ={{display:'flex'}} className='mb-4 mt-4 pb-4 pt-4 pl-5'>
          <ProfileIcon type="secondary" />
          <p className="text text_type_main-default text_color_inactive ml-2">Личный кабинет </p>
        </div>
      </div>
    </header>
  );
};
export default AppHeader;
