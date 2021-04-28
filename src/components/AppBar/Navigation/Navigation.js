import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import authSelectors from '../../../redux/auth/auth-selectors';
import Filter from '../../Filter/Filter';
import styles from './Navigation.module.css';

export default function Navigation() {
  const location = useLocation();
  const isLogIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <nav className={styles.navigation}>
      <NavLink
        to="/"
        exact
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        HOME
      </NavLink>
      {isLogIn && (
        <>
          <NavLink
            to="/contacts"
            exact
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            Contacts
          </NavLink>
        </>
      )}
      {location.pathname === '/contacts' && <Filter />}
    </nav>
  );
}
