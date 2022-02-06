import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

import AcceptImg from './img/Accept.png';
import BuyImg from './img/Buy.png';
import IntervezationImg from './img/Intervezation.png';
import PayImg from './img/Pay.png';
import ReturnImg from './img/Return.png';
import SellImg from './img/Sell.png';

import styles from './Header.module.css'


const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" style={{padding: '0 30px', display: 'flex', justifyContent: 'space-between'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', lg: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', lg: 'none' },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to='' style={{color: '#000'}}>
                  <Typography textAlign="center">
                      <IconButton className={styles.nav__button} style={{background: '#fff', height: '47px', width: '47px', marginRight: '10px'}} sx={{ p: 0 }}>
                        <img className={styles.nav__img} src={SellImg} alt="" />
                      </IconButton>
                      <span className={styles.wrapper__text}>Продать</span>  
                  </Typography>
                </Link> 
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to='' style={{color: '#000'}}>
                  <Typography textAlign="center">
                      <IconButton className={styles.nav__button} style={{background: '#fff', height: '47px', width: '47px', marginRight: '10px'}} sx={{ p: 0 }}>
                        <img className={styles.nav__img} src={BuyImg} alt="" />
                      </IconButton>
                      <span className={styles.wrapper__text}>Купить</span>  
                  </Typography>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to='' style={{color: '#000'}}>
                  <Typography textAlign="center">
                      <IconButton className={styles.nav__button} style={{background: '#fff', height: '47px', width: '47px', marginRight: '10px'}} sx={{ p: 0 }}>
                        <img className={styles.nav__img} src={PayImg} alt="" />
                      </IconButton>
                      <span className={styles.wrapper__text}>Оплатить</span>  
                  </Typography>
                  </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to='' style={{color: '#000'}}>
                  <Typography textAlign="center">
                      <IconButton className={styles.nav__button} style={{background: '#fff', height: '47px', width: '47px', marginRight: '10px'}} sx={{ p: 0 }}>
                        <img className={styles.nav__img} src={AcceptImg} alt="" />
                      </IconButton>
                      <span className={styles.wrapper__text}>Принять</span>  
                  </Typography>
                  </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to='' style={{color: '#000'}}>
                  <Typography textAlign="center">
                      <IconButton className={styles.nav__button} style={{background: '#fff', height: '47px', width: '47px', marginRight: '10px'}} sx={{ p: 0 }}>
                        <img className={styles.nav__img} src={ReturnImg} alt="" />
                      </IconButton>
                      <span className={styles.wrapper__text}>Возврат</span>  
                  </Typography>
                  </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to='' style={{color: '#000'}}>
                  <Typography textAlign="center">
                      <IconButton className={styles.nav__button} style={{background: '#fff', height: '47px', width: '47px', marginRight: '10px'}} sx={{ p: 0 }}>
                        <img className={styles.nav__img} src={IntervezationImg} alt="" />
                      </IconButton>
                      <span className={styles.wrapper__text}>Интарвизация</span>  
                  </Typography>
                </Link>
              </MenuItem>
            </Menu>
          </Box>

          <Box className={styles.container} sx={{ flexGrow: 1, display: { xs: 'none', lg: 'flex' } }}>
            <Link to=''>
              <div className={styles.wrapper}>
                <IconButton className={styles.nav__button} style={{background: '#fff', height: '47px', width: '47px'}} sx={{ p: 0 }}>
                  <img className={styles.nav__img} src={SellImg} alt="" />
                </IconButton>
                <span className={styles.wrapper__text}>Продать</span>
              </div>
            </Link>
            <Link to=''>
              <div className={styles.wrapper}>
                <IconButton className={styles.nav__button} style={{background: '#fff', height: '47px', width: '47px'}} sx={{ p: 0 }}>
                  <img className={styles.nav__img} src={BuyImg} alt="" />
                </IconButton> 
                <span className={styles.wrapper__text}>Купить</span>
              </div>
            </Link>
            <Link to=''>
              <div className={styles.wrapper}>
                <IconButton className={styles.nav__button} style={{background: '#fff', height: '47px', width: '47px'}} sx={{ p: 0 }}>
                  <img className={styles.nav__img} src={PayImg} alt="" />
                </IconButton>
                <span className={styles.wrapper__text}>Оплатить</span>
              </div>
            </Link>
            <Link to=''>
              <div className={styles.wrapper}>
                <IconButton className={styles.nav__button} style={{background: '#fff', height: '47px', width: '47px'}} sx={{ p: 0 }}>
                  <img className={styles.nav__img} src={AcceptImg} alt="" />
                </IconButton>
                <span className={styles.wrapper__text}>Принять</span>
              </div>
            </Link>
            <Link to=''>
              <div className={styles.wrapper}>
                <IconButton className={styles.nav__button} style={{background: '#fff', height: '47px', width: '47px'}} sx={{ p: 0 }}>
                  <img className={styles.nav__img} src={ReturnImg} alt="" />
                </IconButton>
                <span className={styles.wrapper__text}>Возврат</span>
              </div>
            </Link>
            <Link to=''>
              <div className={styles.wrapper}>
                <IconButton className={styles.nav__button} style={{background: '#fff', height: '47px', width: '47px'}} sx={{ p: 0 }}>
                  <img className={styles.nav__img} src={IntervezationImg} alt="" />
                </IconButton>
                <span className={styles.wrapper__text}>Интарвизация</span>
              </div>
            </Link>
          </Box>

          <Box sx={{ flexGrow: 0 }} style={{marginRight: '-20px'}}> 
            <div style={{display: 'flex', alignItems: 'center'}}>
              <div className={styles.mail__wide}>example@mail.ru</div>     
              <Tooltip title="Open settings" style={{marginLeft: '10px'}}>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="User" src="https://w7.pngwing.com/pngs/68/342/png-transparent-computer-icons-user-profile-priest-miscellaneous-avatar-user.png" />
                </IconButton>
              </Tooltip>
            </div>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem key='logout' onClick={handleCloseUserMenu}>
                <Typography textAlign="center">Logout</Typography>
              </MenuItem>
              <div className={styles.mail__narrow}>
                <MenuItem key='mail' onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">example@mail.ru</Typography>
                </MenuItem>
              </div>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;