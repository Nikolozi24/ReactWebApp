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
import {Routes,Route  } from 'react-router-dom'


import { Data } from "./Components/Utility/Data/Data.js"
import {Registration} from "./Components/Pages/Registraton/Registation.tsx"
import Login  from './Components/Pages/Login/Login.tsx';
import Main from './Components/Pages/DataInputPage/Main/Main.tsx';

const App = () => {
  const [users , setUsers] =  useState(Data)
  const handleAddUser=(user)=>{
      setUsers(prev=>[...prev , user]);
  }



  return (
    <div className='app '>
        <Routes>
        <Route path='/' element={<Main/>}/>
        <Route  path='/registration' element={<Registration handleAddUser={handleAddUser}/>}/>
        <Route path='/login' element={<Login users={users}/>}/>
        </Routes>
    </div>
  );
}

export default App