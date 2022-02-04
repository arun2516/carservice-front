import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from "react-router-dom"; 
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import gold from '../images/l2.jpg'
const color = "white";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link to ="/login" style={{textDecoration:"none", color:"red"}}>
        Buckle-Up
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Login() {
  const history = useNavigate();

  
  const handleSubmit = async(event) => {
    event.preventDefault();
};

  return (
    <ThemeProvider theme={theme} >
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={6}
          md={8}
          sx={{
            backgroundImage: `url(${gold})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={6} md={4} component={Paper} elevation={6} square backgroundColor={color}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
              <Typography component="h1" variant="h3" color='red' fontFamily='Mochiy Pop P One'>
              Buckle-Up
            </Typography>
            <Typography component="h1" variant="h6" color='red' fontFamily='Mochiy Pop P One' sx={{ mt: 1 }}>
              Sign in
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
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="mobileno"
                label="Mobile Number"
                type="number"
                id="mobileno"
                autoComplete="mobileno"
              />
              
              <Button
                type="submit"
                style={{backgroundColor:"red"}}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
               
              >
                Sign In
              </Button>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}