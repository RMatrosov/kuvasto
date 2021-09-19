import Card from "./Card";
import React, {FC} from "react";
import {Spinner} from "./Spinner";
import {useDispatch, useSelector} from "react-redux";
import {setIsEditAvatarPopupOpen} from "../redux/actions/popupsActions/setIsEditAvatarPopupOpen";
import {setIsAddPlacePopupOpen} from "../redux/actions/popupsActions/setIsAddPlacePopupOpen";
import {setIsEditProfilePopupOpen} from "../redux/actions/popupsActions/setIsEditProfilePopupOpen";
import {setSelectedCard} from "../redux/actions/cartdSettingActions/setSelectedCard";
import {selectInitialCards} from "../redux/selectors/selectInitialCards";
import {selectCurrentUser} from "../redux/selectors/selectCurrentUser";
import {ICard} from "../types/cardType";


export type TMain = {
    onCardLike: (elem: ICard) => void
    onCardDelete: (elem: ICard) => void
}

const Main: FC<TMain> = ({onCardLike, onCardDelete}) => {

    const {cards, isLoading} = useSelector(selectInitialCards)

    const {user} = useSelector(selectCurrentUser)

    const dispatch = useDispatch()

    function handleEditAvatarClick(): void {
        dispatch(setIsEditAvatarPopupOpen(true))
    }

    function handleEditProfileClick(): void {
        dispatch(setIsEditProfilePopupOpen(true))
    }

    function handleAddPlaceClick(): void {
        dispatch(setIsAddPlacePopupOpen(true))
    }

    function handleCardClick(card: ICard): void {
        dispatch(setSelectedCard(card))
    }

    return (
        <main className="main">
            {isLoading ? (<Spinner/>) :
                (<>
                    <section className="profile">
                        <div className="profile__wrapper">
                            <div onClick={handleEditAvatarClick} className="profile__image-wrapper">
                                <img src={user.avatar} alt="фото профиля"
                                     className="profile__image"/>
                                <button className="profile__image-btn"/>
                            </div>
                            <div className="profile__info">
                                <h1 className="profile__name">{user.name}</h1>
                                <button onClick={handleEditProfileClick} type="button" className="profile__button"/>
                                <p className="profile__job">{user.about}</p>
                            </div>
                        </div>
                        <button onClick={handleAddPlaceClick} type="button" className="profile__button-add"/>
                    </section>

                    <section className="elements">
                        <ul className="elements__list">
                            {cards.map((card) => <Card
                                key={card._id} card={card}
                                onCardClick={handleCardClick}
                                onCardLike={onCardLike}
                                onCardDelete={onCardDelete}
                            />)}
                        </ul>
                    </section>
                </>)}
        </main>
    )
}

export default Main