import React from 'react';
import './DialogColumn.scss'
import backSVG from '../../../assets/svg/iconfinder_icon-ios7-arrow-back_211686.svg'
import {Field, Form, withFormik} from "formik";
import send from '../../../assets/svg/icons_send_1564528.svg'
import cuid from "cuid";

const DialogColumn = ({setShow, list, messages,handleSubmit, setList}) => {

    const name = list.map(obj => obj.name).toLocaleString();

    return (
       <div className='user-dialog-column'>
           {/*// header*/}
           {
               list.map(obj=> (    <div className='user-dialog-column__header' key={cuid()}>

                   <div className='user-dialog-column__header__img' onClick={()=> {setShow(false); setList([])}}>

                       <img src={backSVG} alt="backSVG"/>
                       <span>Назад</span>

                   </div>
                   <div className='user-dialog-column__header__name'>

                       <span>{  obj.name  }</span>
                       <img src={obj.img} alt="userIcon"/>
                   </div>

               </div>))
           }


{ messages.messages.map(user => {
    if(user.name === name ){
      return (
          <div className='user-dialog-column__dialog' key={user.id}>
              <div className='user-dialog-column__dialog__texts'>
                  <ul key={user.id}>
                      <li>
                          <div className='user-dialog-column__dialog__texts__container'>
                              <div className='user-dialog-column__dialog__texts__container__img'>
                                  <img src={user.img} alt="userDialogImg"/>
                              </div>
                              <div className='user-dialog-column__dialog__texts__container__message'>
                                  <span>{user.textBody}</span>
                              </div>

                          </div>
                      </li>
                  </ul>
              </div>
              <div className='user-dialog-column__dialog__answer'>

      <ul>
          <li style={{listStyle: 'none'}}>
          <span>
              {user && user.messagesContainer.map(mes =><div style={{  display: 'flex', alignItems: 'center', marginBottom: '20px'}} key={mes.id}> <img src={mes.img}  alt="mesImg"/> <span >{mes.textBody}</span></div>)}
          </span>
          </li>
      </ul>

              </div>
          </div>
      )
    }
   return null
})}


         <div className='user-dialog-column__formik'>
             <Form>

                 <Field name='textarea' component={'textarea'}  type='text'  placeholder="Type message"/>
                 <img src={send} alt="send"   onClick={handleSubmit} />

             </Form>

         </div>
            </div>

    );
};


const DialogColumnFormik = withFormik({

    mapPropsToValues: ({textarea}) => {

        return {
            textarea: textarea || '',
        }
    } ,
    handleSubmit({textarea}, {props, setValues  } ) {
        const name =   props.list.map(obj => obj.name).toLocaleString();
        if (!textarea) return;
        props.AddToDialogMessage(name ,textarea);
        setValues({textarea: ''});
    },



})(DialogColumn);

export default DialogColumnFormik;