import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { StyledEngineProvider } from '@mui/material/styles';
import Menu, { MenuProps } from '@mui/material/Menu';
import { Button, Fade, MenuItem } from "@mui/material";
import { styled } from '@mui/material/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import logo from '../../assets/icons/logo.svg';
import logov from '../../assets/icons/logo-v.svg';
import icon1 from '../../assets/icons/icon-1.svg';
import icon2 from '../../assets/icons/icon-2.svg';
import icon3 from '../../assets/icons/icon-3.svg';

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 4,
    marginTop: -24,
    marginLeft: 14,
    width: 94,
    backgroundColor: '#16162c',
    backgroundFilter: 'blur(33px)',
    // color:
    //   '#c7c7e1', 
    //   '&:hover': {
    //     color: '#fff'
    //   },
    color: '#c7c7e1',
    fontSize: 14,
    boxShadow:
      '0px 5px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%)',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      // '&:active': {
      //   backgroundColor: alpha(
      //     theme.palette.primary.main,
      //     theme.palette.action.selectedOpacity,
      //   ),
      // },
    },
  },
}));

export default function Header() {
  const [activeTab, setActiveTab] = useState('stake');
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const rippleEffect = (event: any) => {
    const btn = event.currentTarget;

    const circle = document.createElement("span");
    const diameter = Math.max(btn.clientWidth, btn.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - (btn.offsetLeft + radius)}px`;
    circle.style.top = `${event.clientY - (btn.offsetTop + radius)}px`;
    circle.classList.add("ripple");

    const ripple = btn.getElementsByClassName("ripple")[0];

    if (ripple) {
      ripple.remove();
    }

    btn.appendChild(circle);
  }

  const indicator = (<span className="h-1 w-full absolute top-0 left-0 rounded-lg bg-indicator"></span>);

  const menuItems: JSX.Element = (<div className="h-height-80 sm:h-height-48 sm:w-full">
    <ul className="flex items-center text-sm font-bold h-full sm:w-full sm:flex sm:justify-center">
      <li onClick={(e) => rippleEffect(e)} className='ripple relative overflow-hidden h-full sm:w-1/4'>
        <Link to='/stake'><div onClick={() => setActiveTab('stake')} className={`sm:w-full inline-flex items-center justify-center px-4 h-full hover:text-white transition-all ${activeTab === 'stake' ? 'text-white' : 'text-nav-link'}`}>Stake</div></Link>
        {activeTab === 'stake' && indicator}
      </li>
      <li onClick={(e) => rippleEffect(e)} className='ripple relative overflow-hidden h-full sm:w-1/4'>
        <Link to='/claim'><div onClick={() => setActiveTab('claim')} className={`sm:w-full inline-flex items-center justify-center px-4 h-full hover:text-white transition-all ${activeTab === 'claim' ? 'text-white' : 'text-nav-link'}`}>Claim</div></Link>
        {activeTab === 'claim' && indicator}
      </li>
      <li onClick={(e) => rippleEffect(e)} className='ripple relative overflow-hidden h-full sm:w-1/4'>
        <Link to='/lock'><div onClick={() => setActiveTab('lock')} className={`sm:w-full inline-flex items-center justify-center px-4 h-full hover:text-white transition-all ${activeTab === 'lock' ? 'text-white' : 'text-nav-link'}`}>Lock</div></Link>
        {activeTab === 'lock' && indicator}
      </li>
      {/* <li onClick={(e) => rippleEffect(e)} className='ripple relative overflow-hidden h-full'>
      <div onClick={(e) => rippleEffect(e)} className='inline-flex items-center cursor-pointer px-4 h-full text-nav-link hover:text-white transition-all'>Menu</div>
    </li> */}
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className='relative overflow-hidden sm:hidden font-semibold inline-flex items-center cursor-pointer px-4 h-full text-nav-link hover:text-white transition-all capitalize'
      >
        Menu
        <KeyboardArrowDownIcon/>
      </Button>
      <StyledMenu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button'
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem sx={{ 
          '&:hover': {
            background: 'rgba(255, 255, 255, 0.08)'
          },
          transition: '.3s ease-in',
          paddingTop: 2,
          paddingBottom: 2,
          fontFamily: 'DM Sans',
          fontSize: 14,
          fontWeight: 700
         }} onClick={handleClose}>Docs</MenuItem>
        <MenuItem sx={{ 
          '&:hover': {
            background: 'rgba(255, 255, 255, 0.08)'
          },
          transition: '.3s ease-in',
          paddingTop: 2,
          paddingBottom: 2,
          fontFamily: 'DM Sans',
          fontSize: 14,
          fontWeight: 700
         }} onClick={handleClose}>Discord</MenuItem>
        <MenuItem sx={{ 
          '&:hover': {
            background: 'rgba(255, 255, 255, 0.08)'
          },
          transition: '.3s ease-in',
          paddingTop: 2,
          paddingBottom: 2,
          fontFamily: 'DM Sans',
          fontSize: 14,
          fontWeight: 700
         }} onClick={handleClose}>Medium</MenuItem>
        <MenuItem sx={{ 
          '&:hover': {
            background: 'rgba(255, 255, 255, 0.08)'
          },
          transition: '.3s ease-in',
          paddingTop: 2,
          paddingBottom: 2,
          fontFamily: 'DM Sans',
          fontSize: 14,
          fontWeight: 700
         }} onClick={handleClose}>Twitter</MenuItem>
        <MenuItem sx={{ 
          '&:hover': {
            background: 'rgba(255, 255, 255, 0.08)'
          },
          transition: '.3s ease-in',
          paddingTop: 2,
          paddingBottom: 2,
          fontFamily: 'DM Sans',
          fontSize: 14,
          fontWeight: 700
         }} onClick={handleClose}>Migration</MenuItem>
      </StyledMenu>
    </ul>
  </div>);

  return (
    <StyledEngineProvider injectFirst>
      <header className="px-6 sm:px-3 w-full sm:py-3 flex items-center justify-between" style={{ background: "linear-gradient(90deg,rgba(104,105,231,.2),rgba(104,105,231,0) 4.29%),#1a1a36" }}>
        <div className="flex items-center">
          <div>
            <Link to='/'>
              <div className="flex items-center w-52 sm:w-36">
                <img className="w-10 sm:w-7" src={logov} alt='logo' />
                <span className="inline-block w-3"></span>
                <img className="w-auto sm:w-24" src={logo} alt='logo text' />
              </div>
            </Link>
          </div>
          <div className="sm:hidden">
          {menuItems}
          </div>
          </div>
        <div className="flex items-center">
          <div className="flex items-center text-sm text-white font-bold">
            <a href="https://traderjoexyz.com/" target='_blank' rel="noreferrer" className="flex sm:hidden items-center mr-5">
              <img className="w-6" src={icon1} alt='icon' />
              <p className="ml-3 mt-px">$2.92</p>
            </a>
            <a href="https://traderjoexyz.com/" target='_blank' rel="noreferrer" className="flex items-center mr-5">
              <img className="w-6" src={icon2} alt='icon' />
              <p className="ml-3 mt-px">$2.83</p>
            </a>
            <a href="https://traderjoexyz.com/" target='_blank' rel="noreferrer" className="flex items-center mr-5">
              <img className="w-6" src={icon3} alt='icon' />
              <p className="ml-3 mt-px">$0.70</p>
            </a>
            <a href="https://traderjoexyz.com/" target='_blank' rel="noreferrer" className="flex sm:hidden items-center mr-5">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" color="#6869E7" height="20" width="20" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(104, 105, 231)', marginRight: 7 }}><path d="M336 448H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm157.2-340.7l-81-81c-6.2-6.2-16.4-6.2-22.6 0l-11.3 11.3c-6.2 6.2-6.2 16.4 0 22.6L416 97.9V160c0 28.1 20.9 51.3 48 55.2V376c0 13.2-10.8 24-24 24s-24-10.8-24-24v-32c0-48.6-39.4-88-88-88h-8V64c0-35.3-28.7-64-64-64H96C60.7 0 32 28.7 32 64v352h288V304h8c22.1 0 40 17.9 40 40v27.8c0 37.7 27 72 64.5 75.9 43 4.3 79.5-29.5 79.5-71.7V152.6c0-17-6.8-33.3-18.8-45.3zM256 192H96V64h160v128z"></path></svg>
              <p className="ml-3 mt-px">80.487</p>
            </a>
          </div>
          <div className="flex cursor-pointer items-center bg-wallet px-3 py-2 text-sm rounded-md font-medium uppercase">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="#fff" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 11H13.5C13.2239 11 13 11.2239 13 11.5C13 11.7761 13.2239 12 13.5 12H14.5C14.7761 12 15 11.7761 15 11.5C15 11.2239 14.7761 11 14.5 11ZM4.5 3C3.67157 3 3 3.67157 3 4.5V14.5C3 15.8807 4.11929 17 5.5 17H15.5C16.3284 17 17 16.3284 17 15.5V6.5C17 5.84689 16.5826 5.29127 16 5.08535V4.5C16 3.67157 15.3284 3 14.5 3H4.5ZM4 14.5V5.91465C4.15639 5.96992 4.32468 6 4.5 6H15.5C15.7761 6 16 6.22386 16 6.5V15.5C16 15.7761 15.7761 16 15.5 16H5.5C4.67157 16 4 15.3284 4 14.5ZM4.5 4H14.5C14.7761 4 15 4.22386 15 4.5V5H4.5C4.22386 5 4 4.77614 4 4.5C4 4.22386 4.22386 4 4.5 4Z"></path></svg>
            <p className="ml-2 sm:hidden">connect wallet</p>
          </div>
        </div>
      </header>
      <div className="absolute w-full justify-center left-0 bottom-0 bg-bottomMenu hidden sm:flex">
{menuItems}
      </div>
    </StyledEngineProvider>
  );
}