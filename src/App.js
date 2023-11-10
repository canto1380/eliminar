import './App.css'
import AppRouter from './routes/AppRouter'
import UserProvider from './context/UserProvider'

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
