import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGooglePlusG, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


import './forma-auth.css';

function FormAuth() {
   const [isActive, setActive] = useState(false);
   const [open, setOpen] = useState(false);

   const handleClickOpen = () => {
      setOpen(true);
   };

   const handleClose = () => {
      setOpen(false);
   };

   const signUp = (e) => {
      e.preventDefault();
      setActive(!isActive);
   }
   return (

      <div>
         <h2>Форма регистрации B-Fin</h2>
         <div className={isActive ? "container right-panel-active" : "container"} id="container">
            <div className="form-container sign-up-container">
               <form action="#">
                  <h1>Создать аккаунт</h1>
                  <div className="social-container">
                     <a href="/#" className="social">
                        <FontAwesomeIcon icon={faFacebookF} />
                     </a>
                     <a href="/#" className="social">
                        <FontAwesomeIcon icon={faGooglePlusG} />
                     </a>
                     <a href="/#" className="social">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                     </a>
                  </div>
                  <span>или используйте почту для входа</span>
                  <input type="text" name="login" placeholder="Логин" />
                  <input type="email" name="email" placeholder="Почта" />
                  <input type="password" name="pass" placeholder="Пароль" />
                  <button>Зарегистрироваться</button>
               </form>
            </div>
            <div className="form-container sign-in-container">
               <form action="#">
                  <h1>Войти</h1>
                  <div className="social-container">
                     <a href="/#" className="social">
                        <FontAwesomeIcon icon={faFacebookF} />
                     </a>
                     <a href="/#" className="social">
                        <FontAwesomeIcon icon={faGooglePlusG} />
                     </a>
                     <a href="/#" className="social">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                     </a>
                  </div>
                  <span>или используйте свою почту</span>
                  <input type="email" name="email" placeholder="Почта" />
                  <input type="password" name="pass" placeholder="Пароль" />
                  <Button variant="text" onClick={handleClickOpen}>Забыли пароль?</Button>
                  <Dialog open={open} onClose={handleClose}>
                     <DialogTitle>Восстановлдение пароля</DialogTitle>
                     <DialogContent>
                        <DialogContentText>
                           Для восстановления пароля оставьте свою почту
                        </DialogContentText>
                        <TextField
                           autoFocus
                           margin="dense"
                           id="name"
                           label="Email Address"
                           type="email"
                           fullWidth
                           variant="standard"
                        />
                     </DialogContent>
                     <DialogActions>
                        <Button onClick={handleClose}>Отмена</Button>
                        <Button onClick={handleClose}><Link to="/password-recovery">Восстановить</Link></Button>
                     </DialogActions>
                  </Dialog>
                  <Link to="/dashboard"><button>Войти</button></Link>
               </form>
            </div>
            <div className="overlay-container">
               <div className="overlay">
                  <div className="overlay-panel overlay-left">
                     <h1>Привет!</h1>
                     <p>Если у Вас уже есть аккаунт, пожалуйста, войдите под своей личной информацией</p>
                     <button className="ghost" id="signIn" onClick={signUp}>Войти</button>
                  </div>
                  <div className="overlay-panel overlay-right">
                     <h1>Привет, Друг!</h1>
                     <p>Введите свои личные данные и начните путешествие с нами</p>
                     <button className="ghost" id="signUp" onClick={signUp}>Зарегистрироваться</button>
                  </div>
               </div>
            </div>
         </div>
      </div>

   );
}

export default FormAuth;
