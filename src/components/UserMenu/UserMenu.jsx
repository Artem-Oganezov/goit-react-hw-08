import { Button } from '@mui/material';
import s from './UserMenu.module.css';
import { logoutThunk } from '../../redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';

const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <div className={s.nav}>
      <h2 className={s.user}>{user.name}</h2>

      <Button variant="contained" onClick={() => dispatch(logoutThunk())}>
        Logout
      </Button>
    </div>
  );
};

export default UserMenu;
