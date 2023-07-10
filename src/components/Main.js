import React from 'react';
import {api} from '../utils/api.js'
import Card from "./Card.js";


export default function Main(props) {

    const [userName, setUserName] = React.useState()
    const [userDescription, setUserDescription] = React.useState()
    const [userAvatar, setUserAvatar] = React.useState()
    const [cards, setCards] = React.useState([])

    React.useEffect(()=>{
        api.getProfileInformation()
            .then(userInformation=>{
                setUserName(userInformation.name)
                setUserDescription(userInformation.about)
                setUserAvatar(userInformation.avatar)
            })
            .catch((err)=>{console.log(err)});
    }, [])



    React.useEffect(()=>{
        api.getCards()
            .then(cards=>{
                setCards(cards)
            })
            .catch((err)=>{console.log(err)});
    }, [])


    return (<main className="content">
            <section className="profile">
                <div className="profile__avatar-container" onClick={props.onEditAvatar}>
                    <div className="profile__avatar-icon">
                        <button
                            className="profile__avatar-edit"
                            type="button"
                            aria-label="Иконка карандаша"
                        />
                    </div>
                    <img className="profile__avatar" alt="Фото профиля" src={userAvatar}/>
                </div>
                <div className="profile__info">
                    <h1 className="profile__name">{userName}</h1>
                    <button type="button" className="profile__edit-button" onClick={props.onEditProfile}/>
                    <p className="profile__about">{userDescription}</p>
                </div>
                <button className="profile__add-button" type="button" onClick={props.onAddPlace}/>
            </section>
        <section className="elements">
            {cards.map((card, i)=>(
                <Card card={card} key={card._id} handleCardClick={props.onCardClick}/>
            ))}
        </section>
        </main>)

}