import { Navigate, Route, Routes } from 'react-router-dom'
import { CHAT_ROUTE, LOGIN_ROUTE } from '../utils/consts'
import { privateRoutes, publicRoutes } from './routes'
import { useContext, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from '../App';
import Loader from './Loader';

const AppRouter = () => {
   const { auth } = useContext(Context)
   const [user, initialising, error] = useAuthState(auth)
   if (initialising) {
      return <Loader />
   }

   return user ?
      (
         <Routes >
            {privateRoutes.map(({ path, Component }) =>
               <Route path={path} element={<Component />} exect={true} />
            )}
            <Route path='*' element={<Navigate to={CHAT_ROUTE} />} />
         </Routes>
      ) :
      (
         <Routes  >
            {publicRoutes.map(({ path, Component }) =>
               <Route path={path} element={<Component />} exect={true} />
            )}
            <Route path='*' element={<Navigate to={LOGIN_ROUTE} />} />
         </Routes>
      )
}

export default AppRouter