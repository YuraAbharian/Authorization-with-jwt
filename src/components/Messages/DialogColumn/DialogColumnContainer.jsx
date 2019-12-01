import DialogColumn from './DialogColumn'
import React from 'react';
import {connect} from "react-redux";

const DialogColumnContainer = (props ) => {

    return (
        <DialogColumn {...props}  />
    );
};
const mapStateToProps=(state)=> ({
    messages: state.messages
});
export default connect(mapStateToProps,{})(DialogColumnContainer);