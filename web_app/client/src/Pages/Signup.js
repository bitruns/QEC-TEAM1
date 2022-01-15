/**
 * Signup page from template
 * Please see note in README for more information on commenting
 * Source Code can be found here:
 * https://github.com/mui-org/material-ui/blob/master/docs/src/pages/getting-started/templates/sign-up/SignUp.js
 */
 import * as React from 'react';
 import Avatar from '@mui/material/Avatar';
 import Button from '@mui/material/Button';
 import CssBaseline from '@mui/material/CssBaseline';
 import TextField from '@mui/material/TextField';
 import Link from '@mui/material/Link';
 import Grid from '@mui/material/Grid';
 import Box from '@mui/material/Box';
 import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
 import Typography from '@mui/material/Typography';
 import Container from '@mui/material/Container';
 import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useHistory } from 'react-router-dom';
 
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
 
 export default function SignUp() {
   const history = useHistory();
   const handleSubmit = (event) => {
     event.preventDefault();
     const data = new FormData(event.currentTarget);
     // eslint-disable-next-line no-console
    //  TODO: HIT ENDPOINT
     console.log({
       email: data.get('email'),
       userName: data.get('userName'),
       password: data.get('password'),
     });
     if (true) {
       const id = "ASSD";// from backend
       const credentials = id;
       localStorage.setItem('credentials', credentials);
        history.push({
          pathname: "/" + process.env.REACT_APP_PAGES_PATH_CHOOSEHABIT + "/" + credentials
        });
     }
   };
 
   return (
     <ThemeProvider theme={theme}>
       <Container component="main" maxWidth="xs">
         <CssBaseline />
         <Box
           sx={{
             marginTop: 8,
             display: 'flex',
             flexDirection: 'column',
             alignItems: 'center',
           }}
         >
           <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
             <LockOutlinedIcon />
           </Avatar>
           <Typography component="h1" variant="h5">
             Sign up
           </Typography>
           <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
             <Grid container spacing={2}>
               <Grid item xs={12} sm={6}>
                 <TextField
                   autoComplete="user-name"
                   name="userName"
                   required
                   fullWidth
                   id="userName"
                   label="User Name"
                   autoFocus
                 />
               </Grid>
               <Grid item xs={12}>
                 <TextField
                   required
                   fullWidth
                   id="email"
                   label="Email Address"
                   name="email"
                   autoComplete="email"
                 />
               </Grid>
               <Grid item xs={12}>
                 <TextField
                   required
                   fullWidth
                   name="password"
                   label="Password"
                   type="password"
                   id="password"
                   autoComplete="new-password"
                 />
               </Grid>
             </Grid>
             <Button
               type="submit"
               fullWidth
               variant="contained"
               sx={{ mt: 3, mb: 2 }}
             >
               Sign Up
             </Button>
             <Grid container justifyContent="flex-end">
               <Grid item>
                 {/* Path modified to login */}
                 <Link href="#/Login" variant="body2"> 
                   Already have an account? Sign in
                 </Link>
               </Grid>
             </Grid>
           </Box>
         </Box>
         <Copyright sx={{ mt: 5 }} />
       </Container>
     </ThemeProvider>
   );
 }