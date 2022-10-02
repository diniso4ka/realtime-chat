import React from 'react';
import { CHAT_ROUTE, LOGIN_ROUTE, routePathType } from '../utils/consts';
import Chat from './Chat';
import Login from './Login';

interface IRoutes {
   path: routePathType;
   Component: React.FC
}

export const publicRoutes: IRoutes[] = [
   {
      path: LOGIN_ROUTE,
      Component: Login
   }
]

export const privateRoutes: IRoutes[] = [
   {
      path: CHAT_ROUTE,
      Component: Chat
   }
]