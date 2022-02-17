// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faGooglePlusG, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import { Link } from 'react-router-dom';
// import { useState } from 'react';
// import API from '../api/api';
import './forma-auth.css';

// ===========================================================================
// 1) Раскоментировать строку 5 и 6, убрать import с 4 строки.
// 2) Всё что закоментировано до return - раскоментировать.
// 3) Заменить всё, что подписано в return. Закоментированный блок в {/* */} раскоментируется и меняется на тот что находится ниже, в таких же скобках
// ===========================================================================

function FormpPasswordRecovery() {
   // const api = new API();

   // const [password, setPassword] = useState("");
   // const [repeat, repeatPassword] = useState("");

   // const code = window.location.search.split("code=")[1]

   // const passwordInput = (e) => setPassword(e.target.value);
   // const repPasswordInput = (e) => repeatPassword(e.target.value);

   // const changePassword = (e) => {
   //    e.preventDefault();

   //    if (password !== repeat || !password) {
   //       return alert("пароль не совпадает или его вовсе нет")
   //    }

   //    api.changePassword(code, password).then(data => {
   //       if (data.status === "error") {
   //          return alert(data.message)
   //       }
   //       window.location.href = `/registration`
   //    });
   // }
   return (
      <div>
         <h2>Форма восстановления пароля B-Fin</h2>
         <div className="container" id="container">
            <div className="form-container sign-in-container1">
               {/*                
                  <form action="#">
                     <h1>Восстановление пароля</h1>
                     <input type="password" name="pass" placeholder="Новый пароль" onChange={passwordInput} />
                     <input type="password" name="pass" placeholder="Повторите пароль еще раз" onChange={repPasswordInput}/>
                     <button onClick={changePassword}>Войти с новым паролем</button>
                  </form> 
               */}
               {/* ================================== */}
               <form action="#">
                  <h1>Восстановление пароля</h1>
                  <input type="email" name="email" placeholder="Почта" />
                  <input type="password" name="pass" placeholder="Новый пароль" />
                  <input type="password" name="pass" placeholder="Повторите пароль еще раз" />
                  <Link to="/dashboard"><button>Войти с новым паролем</button></Link>
               </form>
               {/* ================================== */}
            </div>
         </div>
      </div>

   );
}

export default FormpPasswordRecovery;
