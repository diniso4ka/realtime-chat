import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../App';
import { useAuthState } from 'react-firebase-hooks/auth';

import { LOGIN_ROUTE } from '../utils/consts'
import { signOut } from 'firebase/auth';

const Navbar = () => {
   const { auth } = useContext(Context)
   const [user, initialising, error] = useAuthState(auth)


   return (
      <Box sx={{ flexGrow: 1 }}>
         <AppBar position="static">
            <Toolbar>
               <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
               >
                  <MenuIcon />
               </IconButton>
               <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  News
               </Typography>
               {user ?
                  <Button onClick={() => auth.signOut()} variant='outlined' color="inherit">Выйти</Button> :
                  <Link to={LOGIN_ROUTE}>
                     <Button variant='outlined' color="inherit">Логин</Button>
                  </Link>
               }

            </Toolbar>
         </AppBar>
      </Box>
   )
}

export default Navbar