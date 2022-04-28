import tijIMG from '../../assets/images/tij.svg'
import './styles.css'

function SignIn () {
  return (
    
     <div style={{width:'100vw',height:'100vh',backgroundColor:'red'}}   >
      <div  className="container-login">
        <div className="wrap-login">
          <form className="login-form">
          <div className="login-form-title"> 
          <h1>Sistema Patrimonio</h1>
          <img src={tijIMG} alt="Logo Tijuca" />
          </div>
          
          <div className="wrap-input"> 
            <input className="input" type="Usuario" />
            <span className="focus-input" data-placeholder="Usuario"></span>
          </div>
          
          <div className="wrap-input">
            <input className="input" type="Senha" />
            <span className="focus-input" data-placeholder="Senha"></span>
          </div>
          
          <div className="container-login-form-btn"> 
            <button className="login-form-btn">Login</button>
          </div>

          <div className="text-center">
            <span className="txt1">Não possui usuario?</span>

            <a className= "txt2" href="#">Criar usuario.</a>

          </div>

          </form>
        
         

        </div>
      </div>
    </div>
  
  )
}

export default SignIn;