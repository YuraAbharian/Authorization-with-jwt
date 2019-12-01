import React  from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {compose} from "redux";
import {withRouter} from "react-router";
import   {withAuthRedirect} from "../../helpers/AuthRedirect/AuthRedirect";
import {setPostThunk} from "../../Actions/postActions";

const ProfileContainer = (props) => {



    // const {log, match } = props;

    // const myID = log.id || 1328;
    //
    // const id =  match.params.id;

    return (

        <Profile {...props} />

    );
};

const mapStateToProps = (state) => ({
    log: state.log,
});

export default compose(connect(mapStateToProps, {setPostThunk}),withAuthRedirect, withRouter )(ProfileContainer);