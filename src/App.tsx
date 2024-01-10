/// 
///
///       Hello Dear user i,m Newbie and this code is for my personal study purposes 
//       i,m learning new  style of working with  useForm Hook
//        learn how to improve my code style 
//        later i'll improve this application now only have Registration and Login system
//        now i added share buttons 
///       
//        note:This  app it still on development mode
///

import React from 'react'
import { useState } from 'react';
import {Routes,Route , Link  } from 'react-router-dom'
import { Layout , Typography , Space } from 'antd';

import Navbar from './Components/Navbar/Navbar';
import {Registration} from "./Components/Pages/Registraton/Registation.tsx"
import Login  from './Components/Pages/Login/Login.tsx';

const App = () => {
  const [users , setUsers] =  useState([{
      id:0,
      username:"",
      email:'',
      password:"",
  },
])
  const handleAddUser=(user)=>{
      setUsers(prev=>[...prev , user]);
  }


  return (
    <div className='app'>
        <Routes>
        <Route path='/' element={(<h1 className='text-center text-[90px]'> std::cout&#60;&#60;"Hello World";</h1>)}/>
        <Route  path='/registration' element={<Registration handleAddUser={handleAddUser}/>}/>
        <Route path='/login' element={<Login/>}/>
        </Routes>
    </div>
  );
}

export default App