import React from 'react';
import './App.scss';
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {Route} from "react-router";
import MessagesContainer from "./components/Messages/MessagesContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./helpers/LoginForm/LoginContainer";
import RegisterContainer from "./helpers/RegisterForm/RegisterContainer";


function App() {
    return (  
        <div className='app'>
            <div className='app__container'>

                <HeaderContainer/>

                <div className='app__container__body'>
                    <Navbar/>
                    <div className='app__container__body__main'>
                        <Route path='/profile/:id?' render={() => <ProfileContainer/>}/>
                        <Route path='/messages' render={() => <MessagesContainer/>}/>
                        <Route path='/login' render={() => <LoginContainer/>}/>
                        <Route path='/register' render={() => <RegisterContainer/>}/>
                    </div>

                </div>

            </div>
        </div>

    );
}

export default App;
