import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import petsImage from '../../assets/pets.jpg';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>PetFood</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={petsImage} alt='Best pet food!' />
      </div>
    </Fragment>
  );
};

export default Header;
