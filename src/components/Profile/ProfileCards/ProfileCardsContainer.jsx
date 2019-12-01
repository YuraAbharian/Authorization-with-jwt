import React from 'react';
import {connect} from "react-redux";
import ProfileCards from "./ProfileCards";


const ProfileCardsContainer = ({likePost, disLikePost, profile, removePost}) => {

    return (
        <ProfileCards/>
        // profile.Profile && profile.Profile.map(obj =>   <ProfileCards
        //     key={obj.id} id={obj.id} likePost={likePost} disLikePost={disLikePost}
        //     removePost={removePost} liked={obj.liked} likes={obj.likes} title={obj.title}
        //     date={obj.dateOfPublic}/>)
    );
};

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps, {})(ProfileCardsContainer);