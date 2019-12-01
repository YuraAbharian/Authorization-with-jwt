import React from 'react';
import homeSVG from "../../assets/svg/home-button-for-interface.svg";
import mailSVG from "../../assets/svg/iconfinder_407_message_email_mail_inbox_3990096.svg";
import userSVG from "../../assets/svg/user.svg";
import photoSVG from "../../assets/svg/photo-camera.svg";
import settingsSVG from "../../assets/svg/settings-gears.svg";
import './Navbar.scss'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbar__element'><img src={homeSVG} alt="home"/> <NavLink to='/profile' >Моя страница</NavLink></div>
            <div className='navbar__element'><img src={ mailSVG } alt="mailSVG"/> <NavLink to='/messages' >Сообщения</NavLink></div>
            <div className='navbar__element'><img src={ userSVG } alt="user"/> <NavLink to='/friends/' >Друзья</NavLink></div>
            <div className='navbar__element'><img src={ photoSVG } alt="photoSVG"/> <NavLink to='./photos' >Фотографии</NavLink></div>
            <div className='navbar__element'><img src={ settingsSVG } alt="settingsSVG"/> <NavLink to='/settings' >Настройки</NavLink></div>
        </div>
    );
};

export default Navbar;