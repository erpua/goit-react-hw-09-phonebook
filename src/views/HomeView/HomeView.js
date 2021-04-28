import React from 'react';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import styles from './HomeView.module.css';

export default function HomeView() {
  const UserName = useSelector(authSelectors.getUserName);
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Welcome...</h1>
      <br />
      <p className={styles.user}>{UserName}</p>
    </div>
  );
}
