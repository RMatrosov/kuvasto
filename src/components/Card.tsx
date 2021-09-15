import React, {FC} from "react";
import {useSelector} from "react-redux";
import {ICard} from "../types/cardType";
import {selectCurrentUser} from "../redux/selectors/selectCurrentUser";

type TCard = {
    card: ICard
    onCardClick: (arg: ICard) => void
    onCardLike: (arg: ICard) => void
    onCardDelete: (arg: ICard) => void
}

const Card: FC<TCard> = ({card, onCardClick, onCardLike, onCardDelete}) => {

    const {user} = useSelector(selectCurrentUser)

    const isOwn = card.owner._id === user._id;

    const cardDeleteButtonClassName = (
        `element__button-delete ${!isOwn ? 'card__delete-button_hidden' : ''}`
    );

    const isLiked = card.likes.some(i => i._id === user._id);

    const cardLikeButtonClassName = `element__like ${isLiked ? 'element__like_active' : ''}`;

    function handleLikeClick(): void {
        onCardLike(card)
    }

    function handleDeleteClick(): void {
        onCardDelete(card)
    }

    return (
        <li className="element">
            <button type="button" className={cardDeleteButtonClassName}
                    onClick={handleDeleteClick}/>
            <img src={card.link} alt={card.name} onClick={() => onCardClick(card)}
                 className="element__image"/>
            <div className="element__group">
                <h2 className="element__title">{card.name}</h2>
                <div className="element__like-group">
                    <button type="button" className={cardLikeButtonClassName}
                            onClick={handleLikeClick}/>
                    <span className="element__like-counter">{card.likes.length}</span>
                </div>
            </div>
        </li>
    )
}

export default Card