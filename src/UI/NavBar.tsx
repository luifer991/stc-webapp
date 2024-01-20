import './Navbar.css';
import Button from '../Components/Button';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import React from 'react';

const luna = "../../src/assets/icons8-luna-50.png";
const sol = "../../src/assets/icons8-sol-48.png";
const shield = "../../src/assets/goldenshield.png";
const darkshield = "../../src/assets/blackshield.png";

type NavBarProps = {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

function NavBar ({ theme, setTheme }: NavBarProps) {

  const [menu, setMenu] = useState(false)

  const toggleMode = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light');
  }

  return (
    <div className='navbar'>
        <img src={theme === 'light' ? darkshield : shield}
        alt="logo STC un escudo dorado" 
        className='logo' />
        <button className='menu'onClick={()=>{
          setMenu(!menu);
        }}>
                <div></div>
                <div></div>
                <div></div>
        </button>
        <ul className={menu ? 'open' : 'close'}>
            <li><NavLink to='/'>Inicio</NavLink></li>
            <li><NavLink to='/about'>Quiénes Somos</NavLink></li>
            <li><NavLink to='/services'>Nuestros Servicios</NavLink></li>
            <li><NavLink to='/blog'>Blog Táctico</NavLink></li>
        </ul>
        <img onClick={()=>{toggleMode()}} 
        src={theme === 'light' ? luna : sol} 
        alt="sol o luna del modo claro u oscuro" 
        className='toggle-icon' />
        <Button clas='info-btn' text='Aprender Más' />
        <Button clas='sus-btn'text='Suscribirse' />
    </div>
  )
}

export default NavBar