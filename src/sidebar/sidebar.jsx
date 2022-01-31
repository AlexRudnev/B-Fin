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
         <div className={isActive ? "sidebar close" : "sidebar"}>

            <div class="logo-details">
               <i class="fas fa-wallet"></i>
               <span class="logo_name">B-Fin</span>
            </div>
            <ul className="nav-links">
               <li>
                  <a href="/#">
                     <i class='bx bx-grid-alt'></i>
                     <span className="link_name">Начало</span>
                  </a>
                  <ul className="sub-menu blank">
                     <li><a className="link_name" href="/#">Начало</a></li>
                  </ul>
               </li>
               <li className={isDrop ? "showMenu" : ''}>
                  <div className="iocn-link">
                     <a href="/#">
                        <i className='bx bx-collection'></i>
                        <span className="link_name">Быстрые действия</span>
                     </a>
                     <i className='bx bxs-chevron-down arrow' onClick={dropDown}></i>
                  </div>
                  <ul className="sub-menu">
                     <li><a className="link_name" href="/#">Быстрые действия</a></li>
                     <li><a href="/#">Продать</a></li>
                     <li><a href="/#">Купить</a></li>
                     <li><a href="/#">Оплатить</a></li>
                  </ul>
               </li>
               <li className={isDrop ? "showMenu" : ''}>
                  <div className="iocn-link">
                     <a href="/#">
                        <i className='bx bx-book-alt'></i>
                        <span className="link_name">Склад</span>
                     </a>
                     <i className='bx bxs-chevron-down arrow'></i>
                  </div>
                  <ul className="sub-menu">
                     <li><a className="link_name" href="/#">Склад</a></li>
                     <li><a href="/#">Web Design</a></li>
                     <li><a href="/#">Login Form</a></li>
                     <li><a href="/#">Card Design</a></li>
                  </ul>
               </li>
               <li>
                  <a href="/#">
                     <i className='bx bx-pie-chart-alt-2'></i>
                     <span className="link_name">Analytics</span>
                  </a>
                  <ul className="sub-menu blank">
                     <li><a className="link_name" href="/#">Analytics</a></li>
                  </ul>
               </li>
               <li>
                  <a href="/#">
                     <i className='bx bx-line-chart'></i>
                     <span className="link_name">Chart</span>
                  </a>
                  <ul className="sub-menu blank">
                     <li><a className="link_name" href="/#">Chart</a></li>
                  </ul>
               </li>
               <li className={isDrop ? "showMenu" : ''}>
                  <div className="iocn-link">
                     <a href="/#">
                        <i className='bx bx-plug'></i>
                        <span className="link_name">Plugins</span>
                     </a>
                     <i className='bx bxs-chevron-down arrow'></i>
                  </div>
                  <ul className="sub-menu">
                     <li><a className="link_name" href="/#">Plugins</a></li>
                     <li><a href="/#">UI Face</a></li>
                     <li><a href="/#">Pigments</a></li>
                     <li><a href="/#">Box Icons</a></li>
                  </ul>
               </li>
               <li>
                  <a href="/#">
                     <i className='bx bx-compass'></i>
                     <span className="link_name">Explore</span>
                  </a>
                  <ul className="sub-menu blank">
                     <li><a className="link_name" href="/#">Explore</a></li>
                  </ul>
               </li>
               <li>
                  <a href="/#">
                     <i className='bx bx-history'></i>
                     <span className="link_name">History</span>
                  </a>
                  <ul className="sub-menu blank">
                     <li><a className="link_name" href="/#">History</a></li>
                  </ul>
               </li>
               <li>
                  <a href="/#">
                     <i className='bx bx-cog'></i>
                     <span className="link_name">Setting</span>
                  </a>
                  <ul className="sub-menu blank">
                     <li><a className="link_name" href="/#">Setting</a></li>
                  </ul>
               </li>
            </ul>
         </div>
         <section className="home-section">
            <div className="home-content">
               <i class='bx bx-menu' onClick={signUp}></i>
            </div>
         </section>
      </>
   )
}