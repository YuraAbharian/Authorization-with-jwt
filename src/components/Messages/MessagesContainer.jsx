import React from 'react';
import {connect} from "react-redux";
import Messages from "./Messages";




const MessagesContainer = ({messages}) => {
    return (
         <Messages messages={messages.messages} />
    );
};
const mapStateToProps=(state)=>  ({
    messages: state.messages
});
export default connect(mapStateToProps,{})(MessagesContainer);