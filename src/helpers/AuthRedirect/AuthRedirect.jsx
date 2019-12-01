import React from 'react';
import { Redirect } from "react-router";

export const withAuthRedirect =(Component)=>{

    return (props) => {
    const { log } = props;
    if (log.isLogged === false) {
        return <Redirect to='/login'/>
    } else {
        return  <Component {...props}/>
    }

};
};




