import React from 'react'

import { Context } from '../index'
import { Box, Button, Grid } from '@mui/material'
import { Container } from '@mui/system'





const Login = () => {
   const { fetchData } = React.useContext(Context)




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
               <Box>
                  <Button onClick={() => fetchData()} variant='outlined'>Войти с помощью Google.</Button>
               </Box>
            </Grid>
         </Grid>
      </Container>
   )
}

export default Login