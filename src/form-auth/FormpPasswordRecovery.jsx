// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faGooglePlusG, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
// import { useState } from 'react';
import { Link } from 'react-router-dom';

import './forma-auth.css';

function FormpPasswordRecovery() {

   return (
      <div>
         <h2>Форма восстановления пароля B-Fin</h2>
         <div className="container" id="container">
            <div className="form-container sign-in-container1">
               <form action="#">
                  <h1>Восстановление пароля</h1>
                  <input type="email" name="email" placeholder="Почта" />
                  <input type="password" name="pass" placeholder="Новый пароль" />
                  <input type="password" name="pass" placeholder="Повторите пароль еще раз" />
                  <Link to="/dashboard"><button>Войти с новым паролем</button></Link>
               </form>
            </div>
         </div>
      </div>

   );
}

export default FormpPasswordRecovery;
