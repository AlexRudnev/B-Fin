
import ClickAwayListener from '@mui/material/ClickAwayListener';
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

export default function Sidebar() {
  const [isActive, setActive] = useState(true);
  const [isDrop, setDrop] = useState(false);
  const [isDropDirectory, setIsDropDirectory] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const title = document.title;
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const dropDownDirectory = () => {
    setIsDropDirectory(!isDropDirectory);
  };
  const handleClickAway = (e) => {
    if (typeof e.target.className === 'string') {
      const component = (e.target.className).slice(0, 8)
      if (component !== 'arrowImg') {
        setActive(true);
      }
    } else {
      setActive(true);
    }
  }
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
      <ClickAwayListener onClickAway={(e) => handleClickAway(e)}>
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
                  <span className="link_name">????????????????????</span>
                </Link>
                <ul className="sub-menu blank">
                  <li>
                    <Link className="link_name" to="/dashboard">
                      ????????????????????
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/allMoves">
                  <i className="bx bx-list-ul"></i>
                  <span className="link_name">?????? ????????????????</span>
                </Link>
                <ul className="sub-menu blank">
                  <li>
                    <Link className="link_name" to="/allMoves">
                      ?????? ????????????????
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/money">
                  <i className="bx bx-money"></i>
                  <span className="link_name">????????????</span>
                </Link>
                <ul className="sub-menu blank">
                  <li>
                    <Link className="link_name" to="/money">
                      ????????????
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/productsAndService">
                  <i className="bx bx-package"></i>
                  <span className="link_name">???????????? ?? ????????????</span>
                </Link>
                <ul className="sub-menu blank">
                  <li>
                    <Link className="link_name" to="/productsAndService">
                      ???????????? ?? ????????????
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/clients">
                  <i className="bx bx-group"></i>
                  <span className="link_name">??????????????</span>
                </Link>
                <ul className="sub-menu blank">
                  <li>
                    <Link className="link_name" to="/clients">
                      ??????????????
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/ordersAndSales">
                  <i className="bx bx-cart"></i>
                  <span className="link_name">???????????? ?? ??????????????</span>
                </Link>
                <ul className="sub-menu blank">
                  <li>
                    <Link className="link_name" to="/ordersAndSales">
                      ???????????? ?? ??????????????
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/purchasesAndStorage">
                  <i className="bx bx-grid-alt"></i>
                  <span className="link_name">?????????????? ?? ??????????</span>
                </Link>
                <ul className="sub-menu blank">
                  <li>
                    <Link className="link_name" to="/purchasesAndStorage">
                      ?????????????? ?? ??????????
                    </Link>
                  </li>
                </ul>
              </li>
              <li className={isDropDirectory ? "showMenu" : ''}>
                <div className="iocn-link">
                  <Link to="/directory">
                    <i className='bx bx-library'></i>
                    <span className="link_name">????????????????????</span>
                  </Link>
                  <i className='bx bxs-chevron-down arrow' onClick={dropDownDirectory}></i>
                </div>
                <ul className="sub-menu">
                  <li><Link className="link_name" to="/directory">????????????????????</Link></li>
                  <li><Link to="/cash_accounts">?????????? ?? ??????????</Link></li>
                  <li><Link to="/banks_details">?????????? ?? ??????????????????</Link></li>
                  <li><Link to="/legal_entities">?????? ????. ????????</Link></li>
                  <li><Link to="/storehouse">????????????</Link></li>
                  <li><Link to="/suppliers">????????????????????</Link></li>
                  <li><Link to="/employees">????????????????????</Link></li>
                  <li><Link to="/measure">?????????????? ??????????????????</Link></li>
                  <li><Link to="/expenditure">???????????? ????????????????</Link></li>
                  <li><Link to="/income_items">???????????? ??????????????</Link></li>
                  <li><Link to="/currencies">????????????</Link></li>
                  <li><Link to="/type_price">???????? ??????</Link></li>
                </ul>
              </li>
              <li className={isDrop ? "showMenu" : ""}>
                <div className="iocn-link">
                  <Link to="/reports">
                    <i className="bx bx-book-alt"></i>
                    <span className="link_name">????????????</span>
                  </Link>
                  <i className="bx bxs-chevron-down arrow" onClick={dropDown}></i>
                </div>
                <ul className="sub-menu">
                  <li><Link className="link_name" to="/reports">????????????</Link></li>
                  <li><Link to="/sales-and-orders">???????????? ?? ??????????????</Link></li>
                  <li><Link to="/purchases-and-receipts">???????????? ??????????????????????</Link></li>
                  <li><Link to="/products">????????????</Link></li>
                  <li><Link to="/debts">??????????</Link></li>
                  <li><Link to="/report-money">????????????</Link></li>
                  <li><Link to="/income">????????????</Link></li>
                  <li><Link to="/costs">??????????????</Link></li>
                  <li><Link to="/financial-result">??????. ??????????????????</Link></li>
                  <li><Link to="/reconciliation-acts">???????? ????????????</Link></li>
                  <li><Link to="/price-list">?????????? ??????????</Link></li>
                </ul>
              </li>

              <li>
                <Link to="/history">
                  <i className="bx bx-history"></i>
                  <span className="link_name">?????????????? ??????????????????</span>
                </Link>
                <ul className="sub-menu blank">
                  <li>
                    <Link className="link_name" to="/history">
                      ?????????????? ??????????????????
                    </Link>
                  </li>
                </ul>
              </li>
            </div>

            <div className="down-menu">
              <li>
                <Link to="/settings">
                  <i className="bx bx-cog"></i>
                  <span className="link_name">??????????????????</span>
                </Link>
                <ul className="sub-menu blank">
                  <li>
                    <Link className="link_name" to="/settings">
                      ??????????????????
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="" className="default-links">
                  <Tooltip className="normal-links" title="??????????????" style={{ marginLeft: '19px', marginRight: '18px', padding: '6px 0' }}>
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
                      {/* <Typography textAlign="center" onClick={logout}>??????????</Typography> ???????????????? ???? ???????????? ???????????? */}
                      <Typography textAlign="center">??????????</Typography>
                    </MenuItem>
                  </Menu>
                  {/* <span className="link_name" style={{wordBreak: 'break-word'}}>{`${decodeToken.email}`}</span> ???????????????? ???? ???????????? ????????????*/}
                  <span className="link_name" style={{ wordBreak: 'break-word' }}>example@mail.ru</span>
                </Link>
                <ul className="sub-menu blank">
                  <li style={{ padding: '6px 0' }}>
                    {/* <span className="link_mail">{`${decodeToken.email}`}</span> ???????????????? ???? ???????????? ????????????*/}
                    <span className="link_mail">example@mail.ru</span>
                  </li>
                </ul>
              </li>
            </div>
          </ul>
        </div>
      </ClickAwayListener>
    </ >
  );
}

