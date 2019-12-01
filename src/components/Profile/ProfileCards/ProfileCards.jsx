import React from 'react';
import './ProfileCards.scss';
import heart from '../../../assets/svg/iconfinder_heart_299063.svg'
import heartLiked from '../../../assets/svg/iconfinder_heart-love-like-favorite-prefered_3209293.svg'
import avatar from '../../../assets/8vRXqkWrzmI.jpg'
import Moment from "react-moment";

const ProfileCards = ({title, likes, liked, date, id, removePost, likePost, disLikePost}) => {


    return (
        <div className='posts'>

            {/* Header */}

            <div className='posts__header'>

                <img src={avatar} alt="userAvatar"/>
                <div className='posts__header__info'>
                    <h1>Yura Abharian</h1>

                    <span> <Moment fromNow>{date}</Moment>  </span>
                </div>
                <div className='posts__header__info__delete__btn' onClick={() => removePost(id)}> &times;</div>
            </div>

            {/* Body */}
            <div className='posts__body'>

                <p>  {title}  </p>

                <div className='posts__body__img'>

                    {/* Here will be a picture   */}

                </div>

            </div>


            {/*Bottom*/}

            <div className='posts__bottom'>

                {liked ? <img onClick={() => {
                        disLikePost(id)
                    }} src={heart} alt="heart"/> :
                    <img onClick={() => {
                        likePost(id)
                    }
                    } src={heartLiked} alt="heart"/>
                }
                <aside>

                    {liked ? <div className='posts__bottom__liked'>{likes}</div> :
                        <div className='posts__bottom__noLike'>{likes}</div>}

                </aside>
            </div>
        </div>
    );
};

export default ProfileCards;