import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import Login from "./Login";
import {Redirect} from "react-router";
import {getLogIn} from "../../Actions/authActions";

const LoginContainer = (props) => {

    const {getLogIn, log} = props;
    if (!log.isLogged) {
        return (
            <Login getLogIn={getLogIn}/>
        );
    } else {
        return <Redirect to='/profile/'/>
    }

};

const mapStateToProps = (state) => ({
    log: state.log
});

export default compose(connect(mapStateToProps, {getLogIn}))(LoginContainer);

