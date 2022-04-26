import jpIMG from '../../assets/images/jp.svg'

function SignIn () {
  return (
    <div className= "container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form"></form>
          <span classNmae="login-form-title">Sistema Patrimonio!</span>
          <span classNmae="login-form-title"> <img src={jpIMG} alt="" /></span>
 
        </div>
      </div>
    </div>
  )
}

export default SignIn;