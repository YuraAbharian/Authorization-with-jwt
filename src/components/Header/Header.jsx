import MainIcon from "../../assets/svg/iconfinder_Twitter-1_174243.svg";
import React from "react";
 import './Header.scss'
import {NavLink} from "react-router-dom";

const Header = ({ log,  LogOut, login}) => {

    return (
        <div className='header'>
            <div className='header__block'>
                <img src={MainIcon} alt="MainIcon"/>
                {
                    log.isLogged ?   <button onClick={()=>{LogOut() }}>Logout</button> : null
                }
                { log.isLogged ? <span>{log.login}</span>
                    :( <><div className='header__block__login'><NavLink to='/login' >Login</NavLink> </div>
                      <div className='header__block__register'> <NavLink to='/register' >Register</NavLink></div></>)
                }

            </div>
        </div>
    );
};

export default Header;