import React from 'react';
import  styles from'./AppHeader.module.css'
import { Logo, BurgerIcon, ListIcon, ProfileIcon, Tab } from '@ya.praktikum/react-developer-burger-ui-components';
function AppHeader() {
  const [current, setCurrent] = React.useState('one')

  return (
    <header className={styles.header}>
      <div  style={{ display: 'flex' }}>
      <Tab value="one"  onClick={setCurrent}>
        <div style={{ display: 'flex' }}>
          <BurgerIcon />
          Конструктор
        </div>
      </Tab>
      <Tab value="two" active={current === 'two'} onClick={setCurrent}>
        <div style={{ display: 'flex' }}>
          <ListIcon />
          Лента заказов
        </div>
      </Tab>
      </div>
      <Logo />
      <Tab value="three"  onClick={setCurrent}>
        <div style={{ display: 'flex' }}>
          <ProfileIcon />
          Личный кабинет
        </div>
      </Tab>

    </header>
  );
};
export default AppHeader;
