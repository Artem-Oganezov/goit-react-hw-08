import React from 'react';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { Navigate } from 'react-router-dom';

const RegistrationPage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;
