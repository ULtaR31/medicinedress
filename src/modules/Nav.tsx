import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

interface NavProps {

}

const  Nav:React.FC<NavProps> = (
    {

    }: NavProps
    )=> {
  return (
      <ul className='Nav'><li><NavLink to='/catalog' className='main' >каталог товаров</NavLink></li><ul className='sub'>
            
            <li><NavLink className="sub" to='/'></NavLink></li>
            <li><NavLink className="sub" to='/'></NavLink></li>
            <li><NavLink className="sub" to='/'></NavLink></li>
            <li><NavLink className="sub" to='/'></NavLink></li>
            <li><NavLink className="sub" to='/'></NavLink></li>
            <li><NavLink className="sub" to='/'></NavLink></li>
        </ul>
        <li><NavLink className="main" to='/about'>о нас</NavLink></li>
        <li><NavLink className="main" to='/'>доставка и оплата</NavLink></li>
        <li><NavLink className="main" to='/'>наши машазины</NavLink></li>
        <li><NavLink className="main" to='/sales'>% распродажа</NavLink></li>
        <li><NavLink className="main" to='/makers'>произволители</NavLink></li> 
    </ul>
  )
}
export default Nav
