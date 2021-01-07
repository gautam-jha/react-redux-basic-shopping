import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import { CartIcon, StarHome, Search } from '../icons';
import styles from './header.module.scss';

const Header = () => {
    const { itemCount } = useContext(CartContext);

    return (
        <header className={styles.header}>
            <Link className={styles.homelink} to="/">
                <StarHome />
            </Link>

            <Link className={styles.rightlink} to="/cart">
                {' '}
                <CartIcon /> Cart ({itemCount})
            </Link>
            <Link className={styles.rightlink} to="/search">
                <Search />
            </Link>
        </header>
    );
};

export default Header;
