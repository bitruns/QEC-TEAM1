/**
 * Login page from template
 * Please see note in README for more information on commenting
 * Source Code can be found here:
 * https://github.com/mui-org/material-ui/blob/master/docs/src/pages/getting-started/templates/sign-in-side/SignInSide.js
 */
import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      {/* Modified to be our site name*/}
      <Link color="inherit" href="#/">
        {process.env.REACT_APP_SITE_NAME}
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignInSide() {
  // To display error
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState(false);
  const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    // Modified to collect information and send to backend
    // Checks to see if it is a valid entry, otherwise, rejects it and displays an error
    if (data.get('email') && data.get('password') ){
      
      // TODO: HIT BACKEND
      console.log({
        email: data.get('email'),
        password: data.get('password'),
      });
      // if status OK
      if (true) {
        // storing credentials
        const credentials = data.get('email')+ data.get('email');
        localStorage.setItem('credentials', credentials);
        history.push({
          pathname: "/" + process.env.REACT_APP_PAGES_PATH_CHOOSEHABIT + "/" + credentials
        });
      } else {
        // if status invalid
        setError(true);
        setErrorText("Invalid Credentials");
      }
    } else {
      setError(true);
      setErrorText("Both fields must be filled out");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Log in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                // models error behaviour
                error={error}
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
                // models error behaviour
                error={error}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Log In
              </Button>
              <Grid container>
                <Grid item>
                  <Typography color="secondary">
                    {error ? errorText : null}
                  </Typography>
                    
                </Grid>
              </Grid>
              <Grid container>
                <Grid item>
                  {/* Changed to hit login page */}
                  <Link href="#/Login" variant="body2"> 
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}