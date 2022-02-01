import { useState } from 'react';

import './sidebar.css'

// const arrow = document.querySelectorAll(".arrow");
// for (var i = 0; i < arrow.length; i++) {
//     arrow[i].addEventListener("click", (e) => {
//         const arrowParent = e.target.parentElement.parentElement; //selecting main parent of arrow
//         arrowParent.classList.toggle("showMenu");
//     });
// }



export default function Sidebar() {
   const [isActive, setActive] = useState(true);
   const [isDrop, setDrop] = useState(false);

   const dropDown = () => {
      setDrop(!isDrop);
   }

   const signUp = (e) => {
      e.preventDefault();
      setActive(!isActive);
   }
   return (
      <>
         <div className={isActive ? "sidebar close" : "sidebar"} >
            <i className={isActive ? "bx bxs-chevrons-right bx-md " : "bx bxs-chevrons-right bx-md  active"} onClick={signUp}></i>
            <div className="logo-details">
               <i className="fas fa-wallet"></i>
               <span className="logo_name">B-Fin</span>
            </div>
            <ul className="nav-links">
               <li>
                  <a href="/#">
                     <i class='bx bxs-dashboard'></i>
                     <span className="link_name">Показатели</span>
                  </a>
                  <ul className="sub-menu blank">
                     <li><a className="link_name" href="/#">Показатели</a></li>
                  </ul>
               </li>
               <li>
                  <a href="/#">
                     <i class='bx bx-list-ul'></i>
                     <span className="link_name">Все движения</span>
                  </a>
                  <ul className="sub-menu blank">
                     <li><a className="link_name" href="/#">Все движения</a></li>
                  </ul>
               </li>
               <li>
                  <a href="/#">
                     <i class='bx bx-package'></i>
                     <span className="link_name">Товары и услуги</span>
                  </a>
                  <ul className="sub-menu blank">
                     <li><a className="link_name" href="/#">Товары и услуги</a></li>
                  </ul>
               </li>
               <li>
                  <a href="/#">
                     <i class='bx bx-group'></i>
                     <span className="link_name">Клиенты</span>
                  </a>
                  <ul className="sub-menu blank">
                     <li><a className="link_name" href="/#">Клиенты</a></li>
                  </ul>
               </li>
               <li>
                  <a href="/#">
                     <i class='bx bx-cart' ></i>
                     <span className="link_name">Заказы и продажи</span>
                  </a>
                  <ul className="sub-menu blank">
                     <li><a className="link_name" href="/#">Заказы и продажи</a></li>
                  </ul>
               </li>
               <li>
                  <a href="/#">
                     <i class='bx bx-money'></i>
                     <span className="link_name">Деньги</span>
                  </a>
                  <ul className="sub-menu blank">
                     <li><a className="link_name" href="/#">Деньги</a></li>
                  </ul>
               </li>
               <li>
                  <a href="/#">
                     <i className='bx bx-grid-alt'></i>
                     <span className="link_name">Закупки и склад</span>
                  </a>
                  <ul className="sub-menu blank">
                     <li><a className="link_name" href="/#">Закупки и склад</a></li>
                  </ul>
               </li>



               <li className={isDrop ? "showMenu" : ''}>
                  <div className="iocn-link">
                     <a href="/#">
                        <i className='bx bx-book-alt'></i>
                        <span className="link_name">Отчеты</span>
                     </a>
                     <i className='bx bxs-chevron-down arrow' onClick={dropDown}></i>
                  </div>
                  <ul className="sub-menu">
                     <li><a className="link_name" href="/#">Отчеты</a></li>
                     <li><a href="/#">Заказы и продажи</a></li>
                     <li><a href="/#">Закупки и приходы</a></li>
                     <li><a href="/#">Товары</a></li>
                     <li><a href="/#">Долги</a></li>
                     <li><a href="/#">Деньги</a></li>
                     <li><a href="/#">Доходы</a></li>
                     <li><a href="/#">Расходы</a></li>
                     <li><a href="/#">Фин. Результат</a></li>
                     <li><a href="/#">Акты сверки</a></li>
                     <li><a href="/#">Прайс листы</a></li>
                  </ul>
               </li>


               <li>
                  <a href="/#">
                     <i className='bx bx-history'></i>
                     <span className="link_name">История изменений</span>
                  </a>
                  <ul className="sub-menu blank">
                     <li><a className="link_name" href="/#">История изменений</a></li>
                  </ul>
               </li>
               <li>
                  <a href="/#">
                     <i className='bx bx-cog'></i>
                     <span className="link_name">Настройки</span>
                  </a>
                  <ul className="sub-menu blank">
                     <li><a className="link_name" href="/#">Настройки</a></li>
                  </ul>
               </li>
            </ul>
         </div>

      </>
   )
}