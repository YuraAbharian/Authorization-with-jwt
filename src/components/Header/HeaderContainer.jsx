import React, {useEffect} from 'react';
import {connect} from "react-redux";
import Header from "./Header";
import {getAuthMe, getLogOut} from "../../Actions/authActions";


const HeaderContainer = (props) => {

    const {getAuth, log } = props;
    useEffect(() => {
        if (!log.isLogged) {
            getAuth()
        }
    }, [log.isLogged, getAuth]);
    return (
        <Header  {...props}/>
    );
};
const mapStateToProps = (state) => ({
    log: state.log,
});


export default connect(mapStateToProps, {getAuth: getAuthMe,LogOut: getLogOut})(HeaderContainer);
