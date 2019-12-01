import React from 'react';
import './DialogsCard.scss'
import cuid from "cuid";
import uniqBy from "lodash/uniqBy";

const DialogsCard = ({setShow, list}) => {

    const newList = uniqBy(list, (name) => name.name);


    return (
        <div className="card__with__users">
            <div className="card__with__users__list">
                <div className="card__with__users__list__user">
                    { newList.map((name) => (<span key={cuid()} onClick={()=>setShow(true)}>{name.name}</span>)) }
                </div>
            </div>

        </div>
    );
};

export default DialogsCard;