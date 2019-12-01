import React,{useState}  from 'react';
import './Messages.scss'
import Moment from "react-moment";
import DialogsCardContainer from "./MessagesCard/DialogsCardContainer";
import DialogColumnContainer from "./DialogColumn/DialogColumnContainer";
import defaultUserSVG from '../../assets/svg/user_default.svg'


const Messages = ({messages}) => {
    const [list, setList] = useState([]);
    const [show, setShow] = useState(false);

    const name = list.map(obj => obj.name).toLocaleString();
    return (
        <div className='messages'>
            <div className="messages__field">
                <div className="messages__field__dialogs">
                    {show ? (<DialogColumnContainer name={name} list={list} setList={setList}  setShow={setShow}/>) : (messages.map(users => (
                        <div key={users.id} className="messages__field__dialogs__current"
                             onClick={() => {setList(list.concat([{name: users.name, img: users.img}]));
                                }}>
                            <div className="messages__field__dialogs__current__profile">
                              { users.img?  <img src={users.img} alt="User_1_img"/> :
                                  <img src={defaultUserSVG} alt="defaultUserImage"/>
                              }
                            </div>
                            <div className="messages__field__dialogs__current__texts">
                                <label> {users.name}</label>
                                <span>{users.textBody}</span>
                                <aside>
                                    <Moment fromNow>{users.dateOfMessage}</Moment>
                                </aside>
                            </div>
                        </div>
                        )
                    ))
                    }


                </div>
            </div>
            <DialogsCardContainer  setShow={setShow} list={list}/>
        </div>
    );
};

export default Messages;