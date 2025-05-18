import { Link } from 'react-router-dom';
import s from './AuthNav.module.css';
import { Button } from '@mui/material';
const AuthNav = () => {
  return (
    <div className={s.nav}>
      <>
        <Button component={Link} to="/login" variant="outlined" color="primary">
          Log In
        </Button>
        <Button
          component={Link}
          to="/register"
          variant="contained"
          color="primary"
        >
          Register
        </Button>
      </>
    </div>
  );
};

export default AuthNav;
