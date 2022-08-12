import React, { FC, memo } from 'react'
import { Outlet } from 'react-router-dom';

const Home:FC  = memo(() => {
    return (
     <>
        <p>This is Homepage!!</p>
        <Outlet/>
     </>
  )
})

export default Home;
