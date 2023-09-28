import './App.css';
import AppRouter from './routes/AppRouter';

function App() {

  return (
    <div className="App">
      {/* <UserProvider> */}
        <AppRouter
        />
      {/* </UserProvider> */}
    </div>
  );
}

export default App;
