import React, { useContext } from 'react'


import { Context } from '../App'
import { Box, Button, Grid } from '@mui/material'
import { Container } from '@mui/system'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";




const Login: React.FC = () => {
   const { auth } = useContext(Context)
   const login = async () => {
      const provider = new GoogleAuthProvider();
      const { user } = await signInWithPopup(auth, provider)
   }



   return (
      <Container>
         <Grid
            container
            style={{ height: window.innerHeight - 50 }}
            alignItems={'center'}
            justifyContent={'center'}>
            <Grid style={{ width: 400, height: 100, background: 'lightgray' }}
               container
               alignItems={'center'}
               justifyContent={'center'}
               direction={'column'}
            >
               <Box >
                  <Button onClick={login} variant='outlined'>Войти с помощью Google.</Button>
               </Box>
            </Grid>
         </Grid>
      </Container>
   )
}

export default Login