import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';

import Layout from './components/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, useEffect } from 'react';
import { refreshThunk } from './redux/auth/operation';
import { selectIsRefreshing, selectToken } from './redux/auth/selectors';
import PrivateRoute from './components/PrivateRoute';
import RestrictedRoute from './components/RestrictedRoute';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const RegistrationPage = lazy(() =>
  import('./pages/RegistrationPage/RegistrationPage')
);
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const token = useSelector(selectToken);

  useEffect(() => {
    if (!token) return;
    dispatch(refreshThunk());
  }, [dispatch, token]);

  return isRefreshing ? null : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
        </Route>
        <Route
          path="/register"
          element={
            <RestrictedRoute
              component={<RegistrationPage />}
              redirectTo="/contacts"
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute component={<LoginPage />} redirectTo="/contacts" />
          }
        />
        <Route path="*" element={<HomePage />} />
      </Routes>

      <Toaster position="top-right" />
    </>
  );
}

export default App;
