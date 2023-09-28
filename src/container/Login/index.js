import LoginComponent from "../../components/Login"

const Login =({banderaLogin, setBanderaLogin}) => {
  return(
    <div>
    <LoginComponent
    banderaLogin={banderaLogin}
    setBanderaLogin={setBanderaLogin}
    />
    </div>
  )
}

export default Login