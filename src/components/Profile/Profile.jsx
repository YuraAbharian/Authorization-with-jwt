import React, {useState} from 'react';
import './Profile.scss'
import avatar from '../../assets/8vRXqkWrzmI.jpg'
import dots from "../../assets/svg/iconfinder_dots_4171949.svg";
import ProfileCardsContainer from "./ProfileCards/ProfileCardsContainer";
import {Form, Field, withFormik} from 'formik';
// import userSVG from '../../assets/svg/user-black-close-up-shape.svg'

const Profile = ({users, userPage}) => {
    const [area, setArea] = useState(true);
    // const math = Math.round(Math.random() * (50 - 1) + 1);

    return (
        <div style={{display: 'flex'}}>

            <div className='page-info'>

                <div className='page-info__cards'>
                    <img src={userPage && userPage.photos.large} alt="usersAvatar"/>
                    <div className='page-info__cards__bottom'>
                        <aside> Редактировать</aside>
                        <img src={dots} alt="dots"/>
                    </div>
                </div>

                <div className='page-info__cards'>
                    <aside> Друзья </aside>
                    <div className='page-info__cards__list'>

                        {/*{users.users && users.users.slice(math, math + 6).map(user => (*/}

                        {/*    <div className="page-info__cards__list__user" key={user.id}>*/}

                        {/*        <div className='page-info__cards__list__user__container'>*/}

                        {/*            <span>{user.name}</span>*/}
                        {/*            /!*<img src={!user.photos.large ? userSVG : user.photos.large} alt="Friend"/>*!/*/}

                        {/*        </div>*/}

                        {/*    </div>*/}
                        {/*))}*/}
                    </div>
                </div>

            </div>

            <div className='page-content'>
{/*<InfoContainer userPage={userPage && userPage}/>*/}

                <div className='page-content__textarea'>

                    {area ? (<div className='page-content__textarea__box' onClick={() => setArea(false)}>
                        <div className='page-content__textarea__box__text'>
                            <img src={avatar} alt="postIcon"/>
                            <aside> What's new?</aside>
                        </div>
                    </div>) : (<div className='page-content__textarea__posts'>
                        <Form name='forms'>
                            <div className='page-content__textarea__posts__field'>
                                <Field placeholder="What's new?" name='textarea' component={'textarea'} type='text'
                                       autoFocus={true}/>
                                <button name='button' type='submit' > Опубликовать</button>
                            </div>
                        </Form>

                    </div>)

                    }

                </div>

                <ProfileCardsContainer/>

            </div>


        </div>
    );
};

const ProfileForm = withFormik({

    mapPropsToValues: ({textarea}) => {
        return {
            textarea: textarea || '',
        }
    },
    handleSubmit({textarea}, {props, setValues,}) {

        if (!textarea) return;
        props.setPostThunk(textarea);
        setValues({textarea: ''});
    },


})(Profile);

export default ProfileForm;


