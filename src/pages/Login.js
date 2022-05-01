import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import loginBackground from '../assets/images/login-background.png'
import logo from '../assets/images/logo.png'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUsernameAndPassword } from '../actions/auth';
import { removeError } from '../actions/ui';
import { Alert } from '@mui/material';

const theme = createTheme();

const Login = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const msgError = useSelector((state) => state.ui.msgError);
  const [loginError, setLoginError] = React.useState(msgError)
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    dispatch(removeError())
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const username = data.get('username');
    const password = data.get('password');
    dispatch(loginUsernameAndPassword(username, password));
  };

  React.useEffect(() => {
    if (isAuthenticated === true) {
      navigate("/home/time-zone");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated])

  React.useEffect(() => {
    setLoginError(msgError)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [msgError])



  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              mx: 4,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img src={logo} width={200} alt='XETUX' />
            {loginError && <Alert severity='error'>{loginError}</Alert>}
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                INICIAR SESIÓN
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${loginBackground})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </Grid>
    </ThemeProvider>
  );
}

export default Login