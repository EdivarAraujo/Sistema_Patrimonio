import { useState } from 'react'
// import tijIMG from '../../assets/images/tij.svg'
// import footerImage from '../../assets/images/mundoTijuca.png'
import logo from '../../assets/images/logoTijuca.png'
import './styles.css'

function SignIn() {
  const [usuario, setUsuario] = useState('')
  const [senha, setSenha] = useState('')

  return (
    <div className="root-login">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="title-form">Sistema Patrimônio</span>

            <div className="wrap-input">
              <input
                className={usuario !== '' ? 'has-val input' : 'input'}
                type="Usuario"
                value={usuario}
                onChange={e => setUsuario(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Usuario"></span>
            </div>

            <div className="wrap-input">
              <input
                className={senha !== '' ? 'has-val input' : 'input'}
                type="Senha"
                value={senha}
                onChange={e => setSenha(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Senha"></span>
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignIn
