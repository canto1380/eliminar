import './App.css'
import AppRouter from './routes/AppRouter'
import UserProvider from './context/UserProvider'

function App() {
  return (
    <div className='App'>
      <UserProvider>
        <AppRouter />
      </UserProvider>
    </div>
  )
}

export default App
