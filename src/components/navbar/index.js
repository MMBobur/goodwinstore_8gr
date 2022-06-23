import * as React from 'react';
import './style.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Tooltip from '@mui/material/Tooltip';
import Accordion from '@mui/material/Accordion';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { color } from '@mui/system';

const pages = ['LAYOUTS', 'SHOP BY', 'CLOTHING', 'FOOTWEAR', 'SALE', 'BY THEME -20%'];
const settings = ['sale'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [isScroll, setIscroll] = React.useState(false);

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

  React.useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY >= 10) {
        setIscroll(true);
      } else {
        setIscroll(false)
      }
    }
  }, [])


  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };


  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'white', boxShadow: 'none' }}>

      <Box sx={{
        display: isScroll ? 'none' : 'flex' && { xs: 'none', md: 'flex' },
        backgroundColor: '#9AC3E1'
      }}>
        <Container sx={{ display: 'flex' }}>
          <Typography sx={{ ml: '0', mr: '0', color: 'white' }}>
            <div style={{display: 'flex', marginTop: 'auto', marginBottom: 'auto'}}>
              <Dropdown>
                <Dropdown.Toggle variant="none" id="dropdown-basic" className='U' style={{color: 'white', marginTop: '7px' }}>
                  ENG
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Eng</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Ru</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">UZB</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown>
                <Dropdown.Toggle variant="none" id="dropdown-basic" style={{color: 'white', marginTop: '7px' }}>
                  USD
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">USD</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Euro</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Rub</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Typography>
          <Typography sx={{ mt: 'auto', mb: 'auto', ml: 'auto', mr: 'auto' }}>
            FREE SHIPPING ON ALL U.S ORDERS OVER $50
          </Typography>
          <Typography sx={{ mt: 'auto', mb: 'auto', ml: 'auto' }}>
            8 800 265 89 56
          </Typography>
          <Button sx={{ mt: 'auto', mb: 'auto', ml: 'auto', color: 'white', ":hover": { color: '#9AC3E1' } }}>
            <p sx={{ color: 'white', textDecoration: 'none', ":hover": { color: 'red' } }}>SEARCH</p>
          </Button>
          <Button sx={{ mt: 'auto', mb: 'auto', ml: 'auto', color: 'white', ":hover": { color: '#9AC3E1' } }}>
            <p sx={{ color: 'white', textDecoration: 'none', ":hover": { color: 'red' } }}>WISHLIST(1)</p>
          </Button>
          <Button sx={{ mt: 'auto', mb: 'auto', ml: 'auto', color: 'white', ":hover": { color: '#9AC3E1' } }}>
            <p sx={{ color: 'white', textDecoration: 'none', ":hover": { color: 'red' } }}>MY ACCOUNT</p>
          </Button>

        </Container>
      </Box>

      <Container maxWidth='lg'
      >
        <Toolbar disableGutters>
          <Typography variant="h6" noWrap component="a" href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }} >

            <img src='https://cdn.shopify.com/s/files/1/0026/0400/7539/t/44/assets/logo-pets.png?v=152945384796340860281617541478' alt='' />
          </Typography>


          <Typography variant="h5" noWrap component="a" href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            <img src='https://cdn.shopify.com/s/files/1/0026/0400/7539/t/44/assets/logo-pets.png?v=152945384796340860281617541478' alt='' />
          </Typography>


          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'center' } }}>
            {/* {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black',display: 'block' }}
              >
                {page}
              </Button>
            ))} */}
            <Typography sx={{ display: 'flex', color: 'white' }}>
              <Button sx={{ color: 'black', ":hover": { color: 'blue' } }}>LAYOUTS <KeyboardArrowDownIcon /></Button>
              <Button sx={{ color: 'black', ":hover": { color: 'blue' } }}>SHOP BY <KeyboardArrowDownIcon /></Button>
              <Button sx={{ color: 'black', ":hover": { color: 'blue' } }}>CLOTHING <KeyboardArrowDownIcon /></Button>
              <Button sx={{ color: 'black', ":hover": { color: 'blue' } }}>FOOTWEAR </Button>
              <Button sx={{ color: 'black', ":hover": { color: 'blue' } }}>SALE</Button>
              <Button sx={{ color: 'black', ":hover": { color: 'blue' } }}>BY THEME -20%</Button>
            </Typography>

          </Box>


          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <LocalMallIcon sx={{ margin: '10%', fontSize: '200%' }} className='O' />
              </IconButton>
            </Tooltip>
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
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>


          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'end' }}>
            <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="success" >

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
                display: { xs: 'block', md: 'none' },
              }}

            >
              {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}
                  <Typography sx={{border:'2px solid red',width:'20%'}}></Typography>
                  </Typography>
                  <KeyboardArrowDownIcon/>
                  
                </MenuItem>
              ))} */}

              <Typography sx={{ display: 'flex', color: 'white' }}>
                <Button>LAYOUTS</Button>
                <Button>SHOP BY</Button>
                <Button>CLOTHING</Button>
                <Button>FOOTWEAR</Button>
                <Button>SALE</Button>
                <Button>BY THEME -20%</Button>
              </Typography>
            </Menu>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
