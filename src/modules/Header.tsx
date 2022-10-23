import React from 'react';
import './Header.css';
import Nav from './Nav';

interface HeaderProps {

}

const Header:React.FC<HeaderProps> =  (
    {

    }: HeaderProps
    ) =>{
  return (
    <div className='Header'>
        <Nav />
    </div>
  )
}

export default Header;