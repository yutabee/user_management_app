import React, { FC, memo } from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from '../components/pages/Home ';
import { Login } from '../components/pages/Login'
import { Page404 } from '../components/pages/Page404';
import Setting from '../components/pages/Setting';
import UserManagement from '../components/pages/UserManagement';
import HeaderLayouts from '../components/templates/HeaderLayouts';
// import { homeRoutes } from './HomeRoutes';

const Router:FC = memo(() => {
  return (
    <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<HeaderLayouts><Home /></HeaderLayouts>} > 
            <Route path='management' element={<UserManagement/>} />
            <Route path='setting' element={<Setting/>} />  
        </Route>
        <Route path="/*" element={<Page404 />} />
    </Routes>
  );
});

export default Router;
