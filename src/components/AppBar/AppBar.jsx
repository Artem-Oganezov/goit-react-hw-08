import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import Navigation from '../Navigation/Navigation';

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        padding: '10px',
        backgroundColor: '#f8f9fa',
        borderBottom: '1px solid rgb(0, 0, 0)',
        borderRadius: '10px',
      }}
    >
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
