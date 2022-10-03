import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


import { useContext } from 'react';
import { Context } from '../App';
import { useAuthState } from 'react-firebase-hooks/auth';


const Navbar = () => {
   const { auth } = useContext(Context)
   const [user] = useAuthState(auth)




   return (
      <Box sx={{ flexGrow: 1 }}>
         <AppBar position="static">
            <Toolbar>
               <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Chat

               </Typography>
               <Button style={{ marginRight: 10 }} disabled={true} variant='outlined' color="inherit">ENG</Button>
               {user ?
                  <Button onClick={() => auth.signOut()} variant='outlined' color="inherit">Sign out</Button> : null
               }

            </Toolbar>
         </AppBar>
      </Box>
   )
}

export default Navbar