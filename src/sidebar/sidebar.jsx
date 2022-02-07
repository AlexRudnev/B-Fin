import Header from '../header/Header';
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
            <div className={isActive ? "header-wide" : "header-narrow"}>
               <Header />
            </div>

            <div className="logo-details"> 
               <i className="fas fa-wallet"></i>
               <span className="logo_name">B-Fin</span>
            </div>
            <ul className="nav-links">
               <li>
                  <Link to="/dashboard">
                     <i className='bx bxs-dashboard'></i>
                     <span className="link_name">Показатели</span>
                  </Link>
                  <ul className="sub-menu blank">
                     <li><Link className="link_name" to="/dashboard">Показатели</Link></li>
                  </ul>
               </li> 
               <li>
                  <Link to="/allMoves">
                     <i className='bx bx-list-ul'></i>
                     <span className="link_name">Все движения</span>
                  </Link>
                  <ul className="sub-menu blank">
                     <li><Link className="link_name" to="/allMoves">Все движения</Link></li>
                  </ul>
               </li>
               <li>
                  <Link to="/productsAndService">
                     <i className='bx bx-package'></i>
                     <span className="link_name">Товары и услуги</span>
                  </Link>
                  <ul className="sub-menu blank">
                     <li><Link className="link_name" to="/productsAndService">Товары и услуги</Link></li>
                  </ul>
               </li>
               <li>
                  <Link to="/clients">
                     <i className='bx bx-group'></i>
                     <span className="link_name">Клиенты</span>
                  </Link>
                  <ul className="sub-menu blank">
                     <li><Link className="link_name" to="/clients">Клиенты</Link></li>
                  </ul>
               </li>
               <li>
                  <Link to="/ordersAndSales">
                     <i className='bx bx-cart' ></i>
                     <span className="link_name">Заказы и продажи</span>
                  </Link>
                  <ul className="sub-menu blank">
                     <li><Link className="link_name" to="/ordersAndSales">Заказы и продажи</Link></li>
                  </ul>
               </li>
               <li>
                  <Link to="/money">
                     <i className='bx bx-money'></i>
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
                     <li><Link to="/sales-and-orders">Заказы и продажи</Link></li>
                     <li><Link to="/purchases-and-receipts">Закупки и приходы</Link></li>
                     <li><Link to="/products">Товары</Link></li>
                     <li><Link to="/debts">Долги</Link></li>
                     <li><Link to="/report-money">Деньги</Link></li>
                     <li><Link to="/income">Доходы</Link></li>
                     <li><Link to="/costs">Расходы</Link></li>
                     <li><Link to="/financial-result">Фин. Результат</Link></li>
                     <li><Link to="/reconciliation-acts">Акты сверки</Link></li>
                     <li><Link to="/price-list">Прайс листы</Link></li>
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