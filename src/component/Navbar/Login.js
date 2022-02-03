import React from 'react'
import { Box} from "@mui/system";
import {Button}from "@mui/material"
import TextField from '@mui/material/TextField';


function Login(){
    return(
        <>
        <div style={{marginTop:"20%"}}>
              <h1 style={{textAlign:"center"}}>Buckle-Up</h1>
      <Box component="form" style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
        <TextField
                margin="normal"
                required
              
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
                
                style={{width:"60%"}}
              />
        <TextField
                margin="normal"
                required
               
                style={{width:"60%"}}
                id="mobileno"
                label="Mobile-No"
                name="mobileno"
                autoComplete="mobileno"
                autoFocus
              />
               <Button
                type="submit"
                style={{width:"60%"}}
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
               
              >
                Continue
              </Button>
        </Box>
        </div>

        </>
    )
}

export default Login;