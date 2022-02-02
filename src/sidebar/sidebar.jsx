import { useState } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css'


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
                  <Link to="/dashboard">
                     <i class='bx bxs-dashboard'></i>
                     <span className="link_name">Показатели</span>
                  </Link>
                  <ul className="sub-menu blank">
                     <li><Link className="link_name" to="/dashboard">Показатели</Link></li>
                  </ul>
               </li>
               <li>
                  <Link to="/allMoves">
                     <i class='bx bx-list-ul'></i>
                     <span className="link_name">Все движения</span>
                  </Link>
                  <ul className="sub-menu blank">
                     <li><Link className="link_name" to="/allMoves">Все движения</Link></li>
                  </ul>
               </li>
               <li>
                  <Link to="/productsAndService">
                     <i class='bx bx-package'></i>
                     <span className="link_name">Товары и услуги</span>
                  </Link>
                  <ul className="sub-menu blank">
                     <li><Link className="link_name" to="/productsAndService">Товары и услуги</Link></li>
                  </ul>
               </li>
               <li>
                  <Link to="/clients">
                     <i class='bx bx-group'></i>
                     <span className="link_name">Клиенты</span>
                  </Link>
                  <ul className="sub-menu blank">
                     <li><Link className="link_name" to="/clients">Клиенты</Link></li>
                  </ul>
               </li>
               <li>
                  <Link to="/ordersAndSales">
                     <i class='bx bx-cart' ></i>
                     <span className="link_name">Заказы и продажи</span>
                  </Link>
                  <ul className="sub-menu blank">
                     <li><Link className="link_name" to="/ordersAndSales">Заказы и продажи</Link></li>
                  </ul>
               </li>
               <li>
                  <Link to="/money">
                     <i class='bx bx-money'></i>
                     <span className="link_name">Деньги</span>
                  </Link>
                  <ul className="sub-menu blank">
                     <li><Link className="link_name" to="/money">Деньги</Link></li>
                  </ul>
               </li>
               <li>
                  <Link to="/purchasesAndStorage">
                     <i className='bx bx-grid-alt'></i>
                     <span className="link_name">Закупки и склад</span>
                  </Link>
                  <ul className="sub-menu blank">
                     <li><Link className="link_name" to="/purchasesAndStorage">Закупки и склад</Link></li>
                  </ul>
               </li>



               <li className={isDrop ? "showMenu" : ''}>
                  <div className="iocn-link">
                     <Link to="/reports">
                        <i className='bx bx-book-alt'></i>
                        <span className="link_name">Отчеты</span>
                     </Link>
                     <i className='bx bxs-chevron-down arrow' onClick={dropDown}></i>
                  </div>
                  <ul className="sub-menu">
                     <li><Link className="link_name" to="/reports">Отчеты</Link></li>
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
                  <Link to="/history">
                     <i className='bx bx-history'></i>
                     <span className="link_name">История изменений</span>
                  </Link>
                  <ul className="sub-menu blank">
                     <li><Link className="link_name" to="/history">История изменений</Link></li>
                  </ul>
               </li>
               <li>
                  <Link to="/settings">
                     <i className='bx bx-cog'></i>
                     <span className="link_name">Настройки</span>
                  </Link>
                  <ul className="sub-menu blank">
                     <li><Link className="link_name" to="/settings">Настройки</Link></li>
                  </ul>
               </li>
            </ul>
         </div>

      </>
   )
}