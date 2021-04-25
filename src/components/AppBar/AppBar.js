import React from 'react';
import { connect } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import AuthNav from './AuthNav/AuthNav';
import Navigation from './Navigation/Navigation';
import UserMenu from './UserMenu/UserMenu';
import styles from './AppBar.module.css';

const AppBar = ({ isAuthenticated }) => (
  <header className={styles.header}>
    <Navigation />
    {isAuthenticated ? <UserMenu /> : <AuthNav />}
  </header>
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsLoggedIn(state),
});

export default connect(mapStateToProps, null)(AppBar);
