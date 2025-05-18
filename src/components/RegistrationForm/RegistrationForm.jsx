import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerThunk } from '../../redux/auth/operation';

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const RegisterSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Minimum 2 characters')
      .required('required field'),
    email: Yup.string().email('Invalid email').required('required field'),
    password: Yup.string()
      .min(6, 'Minimum 6 characters')
      .required('required field'),
  });

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const handleSubmit = (values, actions) => {
    console.log('Регистрация:', values);
    dispatch(registerThunk(values));
    actions.resetForm();
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, mt: 8, borderRadius: 6 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Register
        </Typography>

        <Formik
          initialValues={initialValues}
          validationSchema={RegisterSchema}
          onSubmit={handleSubmit}
        >
          {({ values, errors, touched, handleChange }) => (
            <Form>
              <Box mb={2}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  error={touched.name && Boolean(errors.name)}
                  helperText={touched.name && errors.name}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '12px',
                    },
                  }}
                />
              </Box>
              <Box mb={2}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  autoComplete="username"
                  value={values.email}
                  onChange={handleChange}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '12px',
                    },
                  }}
                />
              </Box>
              <Box mb={3}>
                <TextField
                  fullWidth
                  label="Password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  value={values.password}
                  onChange={handleChange}
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '12px',
                    },
                  }}
                />
              </Box>
              <Typography variant="body2" align="center" mt={2}>
                Already have an account?{' '}
                <Link
                  to="/login"
                  style={{ textDecoration: 'none', color: '#1976d2' }}
                >
                  Sign in
                </Link>
              </Typography>

              <Box display="flex" justifyContent="center" mt={3}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{
                    borderRadius: '30px',
                    px: 5,
                    py: 1.5,
                    backgroundColor: 'black',
                  }}
                >
                  Register
                </Button>
              </Box>
              <Link to="/" style={{ textDecoration: 'none', color: '#1976d2' }}>
                Home page
              </Link>
            </Form>
          )}
        </Formik>
      </Paper>
    </Container>
  );
};

export default RegistrationForm;
