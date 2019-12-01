import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import Register from "./Register";
import {getRegister} from "../../Actions/authActions";

const RegisterContainer = (props) => {

    return (
        <Register   { ...props }/>
    )
};

const mapStateToProps = (state) => ({
    log: state.log
});

export default compose(connect(mapStateToProps, {getRegister}) )(RegisterContainer);

