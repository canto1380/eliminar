import "./App.css";
import AppRouter from "./routes/AppRouter";
import UserProvider from "./context/UserProvider";
import { ToastContainer } from "react-toastify";
import { SidebarProvider } from "./context/SidebarProvider";

function App() {
  return (
    <div className="">
      <UserProvider>
        <SidebarProvider>
          <AppRouter />
          <ToastContainer />
        </SidebarProvider>
      </UserProvider>
    </div>
  );
}

export default App;
