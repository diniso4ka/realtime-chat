import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


import { useContext } from 'react';
import { Context } from '../App';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
   const { auth } = useContext(Context)
   const [user] = useAuthState(auth)

   const { t, i18n } = useTranslation()
   const toggle = () => {
      i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')

   }


   return (
      <Box sx={{ flexGrow: 1 }}>
         <AppBar position="static">
            <Toolbar>
               <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  {t('Chat')}

               </Typography>
               <Button style={{ marginRight: 10 }} disabled={true} onClick={toggle} variant='outlined' color="inherit">{t('ENG')}</Button>
               {user ?
                  <Button onClick={() => auth.signOut()} variant='outlined' color="inherit">{t('Sign out')}</Button> : null
               }

            </Toolbar>
         </AppBar>
      </Box>
   )
}

export default Navbar