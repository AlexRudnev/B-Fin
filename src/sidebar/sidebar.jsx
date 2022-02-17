import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Header from "../header/Header";
import { useState } from "react";
import { Link } from "react-router-dom";
import burgerImg from './img/burger.png'
import arrowImg from './img/arrow.png';
import crossImg from './img/cross.png';
import "./sidebar.css";

// 1) Раскоментировать подключения
// import axios from 'axios';
// import { useEffect } from "react";

export default function Sidebar() {

   // 3) mailOfUser втсавляем на 268 и 272 строке за место "example@mail.ru"
   // const [mailOfUser, setMailOfUser] = useState('');

   // 2) Раскоментировать запрос
   // При обновление компонента запрос на сервер(запрос почты)
   // useEffect(() => {
   //   axios.get('Ваша ссылка на получение почты')
   //     .then((result) => {
   //       const mail = result.data;
   //       setMailOfUser(mail);
   //     })
   // }, [])

   const [isActive, setActive] = useState(true);
   const [isDrop, setDrop] = useState(false);
   const [anchorElUser, setAnchorElUser] = useState(null);
   const title = document.title;
   const handleCloseUserMenu = () => {
      setAnchorElUser(null);
   };
   const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
   };
   const dropDown = () => {
      setDrop(!isDrop);
   };
   const signUp = (e) => {
      e.preventDefault();
      setActive(!isActive);
   };
   return (
      <>
         <div className="header__title">
            <img onClick={signUp} className={isActive ? "arrowImg" : "arrowImg active"} src={arrowImg} alt="arrow" />
            <span className="page__title">{title}</span>
         </div>
         <Header />
         <div className={isActive ? "sidebar close" : "sidebar"}>
            <div className={isActive ? "burger-menu burger" : "burger-menu cross"}>
               <img src={burgerImg} onClick={signUp} className={isActive ? 'burger-menu__img' : 'icon-hide'} alt="burgerMenu" />
               <img src={crossImg} onClick={signUp} className={!isActive ? "cross-menu__img" : "icon-hide"} alt="cross" />
            </div>
            <div className="logo-details">
               <i className="fas fa-wallet"></i>
               <span className="logo_name">B-Fin</span>
            </div>
            <ul className="nav-links">
               <div>
                  <li>
                     <Link to="/dashboard">
                        <i className="bx bxs-dashboard"></i>
                        <span className="link_name">Показатели</span>
                     </Link>
                     <ul className="sub-menu blank">
                        <li>
                           <Link className="link_name" to="/dashboard">
                              Показатели
                           </Link>
                        </li>
                     </ul>
                  </li>
                  <li>
                     <Link to="/allMoves">
                        <i className="bx bx-list-ul"></i>
                        <span className="link_name">Все движения</span>
                     </Link>
                     <ul className="sub-menu blank">
                        <li>
                           <Link className="link_name" to="/allMoves">
                              Все движения
                           </Link>
                        </li>
                     </ul>
                  </li>
                  <li>
                     <Link to="/productsAndService">
                        <i className="bx bx-package"></i>
                        <span className="link_name">Товары и услуги</span>
                     </Link>
                     <ul className="sub-menu blank">
                        <li>
                           <Link className="link_name" to="/productsAndService">
                              Товары и услуги
                           </Link>
                        </li>
                     </ul>
                  </li>
                  <li>
                     <Link to="/clients">
                        <i className="bx bx-group"></i>
                        <span className="link_name">Клиенты</span>
                     </Link>
                     <ul className="sub-menu blank">
                        <li>
                           <Link className="link_name" to="/clients">
                              Клиенты
                           </Link>
                        </li>
                     </ul>
                  </li>
                  <li>
                     <Link to="/ordersAndSales">
                        <i className="bx bx-cart"></i>
                        <span className="link_name">Заказы и продажи</span>
                     </Link>
                     <ul className="sub-menu blank">
                        <li>
                           <Link className="link_name" to="/ordersAndSales">
                              Заказы и продажи
                           </Link>
                        </li>
                     </ul>
                  </li>
                  <li>
                     <Link to="/money">
                        <i className="bx bx-money"></i>
                        <span className="link_name">Деньги</span>
                     </Link>
                     <ul className="sub-menu blank">
                        <li>
                           <Link className="link_name" to="/money">
                              Деньги
                           </Link>
                        </li>
                     </ul>
                  </li>
                  <li>
                     <Link to="/purchasesAndStorage">
                        <i className="bx bx-grid-alt"></i>
                        <span className="link_name">Закупки и склад</span>
                     </Link>
                     <ul className="sub-menu blank">
                        <li>
                           <Link className="link_name" to="/purchasesAndStorage">
                              Закупки и склад
                           </Link>
                        </li>
                     </ul>
                  </li>

                  <li className={isDrop ? "showMenu" : ""}>
                     <div className="iocn-link">
                        <Link to="/directory">
                           <i class='bx bx-library'></i>
                           <span className="link_name">Справочник</span>
                        </Link>
                        <i className="bx bxs-chevron-down arrow" onClick={dropDown}></i>
                     </div>
                     <ul className="sub-menu">
                        <li>
                           <Link className="link_name" to="/directory">
                              Справочник
                           </Link>
                        </li>
                        <li>
                           <Link to="/cash_accounts">Кассы и счета</Link>
                        </li>
                        <li>
                           <Link to="/employees">Сотрудники</Link>
                        </li>
                        <li>
                           <Link to="/legal_entities">Мои фирмы</Link>
                        </li>
                        <li>
                           <Link to="/measure">Единицы измерений</Link>
                        </li>
                        <li>
                           <Link to="/storehouse">Склады</Link>
                        </li>
                        <li>
                           <Link to="/suppliers">Поставщики</Link>
                        </li>

                     </ul>
                  </li>

                  <li className={isDrop ? "showMenu" : ""}>
                     <div className="iocn-link">
                        <Link to="/reports">
                           <i className="bx bx-book-alt"></i>
                           <span className="link_name">Отчеты</span>
                        </Link>
                        <i className="bx bxs-chevron-down arrow" onClick={dropDown}></i>
                     </div>
                     <ul className="sub-menu">
                        <li>
                           <Link className="link_name" to="/reports">
                              Отчеты
                           </Link>
                        </li>
                        <li>
                           <Link to="/sales-and-orders">Заказы и продажи</Link>
                        </li>
                        <li>
                           <Link to="/purchases-and-receipts">Закупки и приходы</Link>
                        </li>
                        <li>
                           <Link to="/products">Товары</Link>
                        </li>
                        <li>
                           <Link to="/debts">Долги</Link>
                        </li>
                        <li>
                           <Link to="/report-money">Деньги</Link>
                        </li>
                        <li>
                           <Link to="/income">Доходы</Link>
                        </li>
                        <li>
                           <Link to="/costs">Расходы</Link>
                        </li>
                        <li>
                           <Link to="/financial-result">Фин. Результат</Link>
                        </li>
                        <li>
                           <Link to="/reconciliation-acts">Акты сверки</Link>
                        </li>
                        <li>
                           <Link to="/price-list">Прайс листы</Link>
                        </li>
                     </ul>
                  </li>

                  <li>
                     <Link to="/history">
                        <i className="bx bx-history"></i>
                        <span className="link_name">История изменений</span>
                     </Link>
                     <ul className="sub-menu blank">
                        <li>
                           <Link className="link_name" to="/history">
                              История изменений
                           </Link>
                        </li>
                     </ul>
                  </li>
               </div>

               <div className="down-menu">
                  <li>
                     <Link to="/settings">
                        <i className="bx bx-cog"></i>
                        <span className="link_name">Настройки</span>
                     </Link>
                     <ul className="sub-menu blank">
                        <li>
                           <Link className="link_name" to="/settings">
                              Настройки
                           </Link>
                        </li>
                     </ul>
                  </li>
                  <li>
                     <Link to="" className="default-links">
                        <Tooltip className="normal-links" title="Аккаунт" style={{ marginLeft: '19px', marginRight: '18px', padding: '6px 0' }}>
                           <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                              <Avatar
                                 alt="User"
                                 src="https://w7.pngwing.com/pngs/68/342/png-transparent-computer-icons-user-profile-priest-miscellaneous-avatar-user.png"
                                 style={{ width: '32px', height: '32px' }}
                              />
                           </IconButton>
                        </Tooltip>
                        <Menu
                           sx={{ mb: "20px", ml: "40px" }}
                           id="menu-appbar"
                           anchorEl={anchorElUser}
                           anchorOrigin={{
                              vertical: "top",
                              horizontal: "right",
                           }}
                           keepMounted
                           transformOrigin={{
                              vertical: "top",
                              horizontal: "right",
                           }}
                           open={Boolean(anchorElUser)}
                           onClose={handleCloseUserMenu}
                        >
                           <MenuItem onClick={handleCloseUserMenu}>
                              <Typography textAlign="center">Выйти</Typography>
                           </MenuItem>
                        </Menu>
                        <span className="link_name" style={{ wordBreak: 'break-word' }}>example@mail.ru</span>
                     </Link>
                     <ul className="sub-menu blank">
                        <li style={{ padding: '6px 0' }}>
                           <span className="link_mail">example@mail.ru</span>
                        </li>
                     </ul>
                  </li>
               </div>
            </ul>
         </div>
      </>
   );
}
