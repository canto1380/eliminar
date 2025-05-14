import "./App.css";
import AppRouter from "./routes/AppRouter";
import UserProvider from "./context/UserProvider";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="">
        <UserProvider>
          <AppRouter />
          <ToastContainer/>
        </UserProvider>
    </div>
  );
}

export default App;
