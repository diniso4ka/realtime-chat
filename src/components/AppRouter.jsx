import { Route, Routes } from 'react-router-dom'
import { CHAT_ROUTE, LOGIN_ROUTE } from '../utils/consts'
import { privateRoutes, publicRoutes } from './routes'
import { useNavigate } from "react-router-dom"

const AppRouter = () => {
   const user = false

   return user ?
      (
         <Routes >
            {privateRoutes.map(({ path, Component }) =>
               <Route path={path} element={<Component />} exect={true} />
            )}
         </Routes>
      ) :
      (
         <Routes  >
            {publicRoutes.map(({ path, Component }) =>
               <Route path={path} element={<Component />} exect={true} />
            )}
         </Routes>
      )
}

export default AppRouter