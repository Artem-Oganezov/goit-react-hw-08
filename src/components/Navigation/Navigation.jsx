import clsx from 'clsx';

import { NavLink } from 'react-router-dom';

import s from './Navigation.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const setActiveClass = ({ isActive }) => {
  return clsx(isActive && s.color);
};

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className={s.header}>
      <nav className={s.nav}>
        <NavLink className={setActiveClass} to="/">
          Home
        </NavLink>
        {isLoggedIn && (
          <NavLink className={setActiveClass} to="/contacts">
            Contacts
          </NavLink>
        )}
      </nav>
    </div>
  );
};

export default Navigation;
