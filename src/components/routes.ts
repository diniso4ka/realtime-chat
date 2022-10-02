import { ChatAsync } from '../pages/Chat/ChatAsync';
import { LoginAsync } from '../pages/Login/LoginAsync';
import React from 'react';
import { CHAT_ROUTE, LOGIN_ROUTE, routePathType } from '../utils/consts';

interface IRoutes {
   path: routePathType;
   Component: React.FC
}

export const publicRoutes: IRoutes[] = [
   {
      path: LOGIN_ROUTE,
      Component: LoginAsync
   }
]

export const privateRoutes: IRoutes[] = [
   {
      path: CHAT_ROUTE,
      Component: ChatAsync
   }
]