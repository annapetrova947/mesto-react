import React from "react";

export default function Card(props) {

    return (
        <div className="element" key={props.card._id} >
            <img src={props.card.link} alt={props.card.name} className="element__photo" onClick={()=>{props.handleCardClick(props.card)}}/>
            <button type="button" className="element__delete"/>
            <h2 className="element__title">{props.card.name}</h2>
            <div className="element__likes">
                <button type="button" className="element__like"/>
                <p className="element__like-amount">{props.card.likes.length}</p>
            </div>
        </div>
    )
}