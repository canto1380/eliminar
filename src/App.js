import './App.css'
import AppRouter from './routes/AppRouter'
import UserProvider from './context/UserProvider'
import { useEffect, useState } from 'react';

function App() {

  return (
    <div className=''>
      <UserProvider>
        <AppRouter />
      </UserProvider>
    </div>
  )
}

export default App
