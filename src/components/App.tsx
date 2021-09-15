import Main from "./Main";
import Footer from "./Footer";
import React, {FC, useEffect} from "react";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import PopupWithSubmit from "./PopupWithSubmit";
import {Route, Switch, Redirect, useHistory} from 'react-router-dom';
import Login from "./Login";
import Register from "./Register";
import * as auth from "../utils/authTS";
import SuccessPopup from "./SuccessPopup";
import FailPopup from "./FailPopup";
import Header from "./Header";
import {useDispatch, useSelector} from "react-redux";
import {closeAllPopupsState} from "../redux/actions/popupsActions/closeAllPopupsState";
import {setFailPopupOpen} from "../redux/actions/popupsActions/setFailPopupOpen";
import {setPopupWithSubmitOpen} from "../redux/actions/popupsActions/setPopupWithSubmitOpen";
import {setSuccessPopupOpen} from "../redux/actions/popupsActions/setSuccessPopupOpen";
import {setCurrentUser} from "../redux/actions/currentUserAndEmail/setCurrentUser";
import {setCurrentEmail} from "../redux/actions/currentUserAndEmail/setCurrentEmail";
import {setLoggedIn} from "../redux/actions/cartdSettingActions/setLoggedIn";
import {setCardToDelete} from "../redux/actions/cartdSettingActions/setCardToDelete";
import {setLoadingBtn} from "../redux/actions/cartdSettingActions/setLoadingBtn";
import {setSelectedCard} from "../redux/actions/cartdSettingActions/setSelectedCard";
import {setIsLoading} from "../redux/actions/initialCardsActions/setIsLoading";
import {setInitialCards} from "../redux/actions/initialCardsActions/setInitialCards";
import {likeCard} from "../redux/actions/initialCardsActions/likeCard";
import {deleteCard} from "../redux/actions/initialCardsActions/deleteCard";
import {addCard} from "../redux/actions/initialCardsActions/addCard";
import {selectInitialCards} from "../redux/selectors/selectInitialCards";
import {selectCurrentUser} from "../redux/selectors/selectCurrentUser";
import {selectCardSettings} from "../redux/selectors/selectCardSettings";
import {selectPopups} from "../redux/selectors/selectPopups";
import {ICard} from "../types/cardType";
import {IProfile} from "../types/currentUserAndEmailTypes";
import {IAvatar} from "../types/IAvatar";
import {IPlace} from "../types/IPlace";
import apiTS from "../utils/apiTS";



const App: FC = () => {

    const dispatch = useDispatch()

    const {cards} = useSelector(selectInitialCards)
    const {user, currentEmail} = useSelector(selectCurrentUser)
    const {selectedCard, cardToDelete, loggedIn} = useSelector(selectCardSettings)
    const {successPopupOpen, failPopupOpen} = useSelector(selectPopups)
    const history = useHistory()

    useEffect(() => {
        dispatch(setIsLoading(true))
        let getInitialCard = apiTS.getInitialCards()
        let getUserInfoFromServer = apiTS.getUserInfoFromServer()

        Promise.all([getInitialCard, getUserInfoFromServer])
            .then(([cardData, userData]) => {
                dispatch(setInitialCards(cardData))
                dispatch(setCurrentUser(userData))
            }).catch((error) => {
            console.log(error)
        }).finally(() => {
            dispatch(setIsLoading(false))
        })

    }, [dispatch]);

    function handleCardLike(card: ICard): void {
        const isLiked = card.likes.some(i => i._id === user._id);
        apiTS.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
            let likedCards = cards.map((c) => c._id === card._id ? newCard : c)
            dispatch(likeCard(likedCards))
        }).catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        if (localStorage.getItem('jwt')) {
            const jwt = localStorage.getItem('jwt');
            auth.checkToken(jwt).then((res) => {
                if (res) {
                    dispatch(setCurrentEmail(res.data.email))
                    dispatch(setLoggedIn(true))
                    history.push("/");
                }
            });
        }
    }, [history, dispatch]);

    function handleCardDelete(card: ICard): void {
        dispatch(setPopupWithSubmitOpen(true))
        dispatch(setCardToDelete(card))
    }

    function handleCardDeleteSubmit(card: ICard): void {
        dispatch(setLoadingBtn(true))
        apiTS.deleteCardFromServer(card._id).then((data) => {
            if (data.message === "Пост удалён") {
                let filteredCards = cards.filter(item => item !== card);
                dispatch(deleteCard(filteredCards))
                dispatch(setPopupWithSubmitOpen(false))
            }
        }).catch((err) => {
            console.log(err);
        }).finally(() => {
            dispatch(setLoadingBtn(false))
        })
    }

    function closeAllPopups(): void {
        dispatch(closeAllPopupsState(false))
        dispatch(setSelectedCard(null))
    }

    function handleUpdateUser(value: IProfile): void {
        dispatch(setLoadingBtn(true))
        apiTS.setUserInfoFromServer(value).then(data => {
            dispatch(setCurrentUser(data))
            closeAllPopups();
        }).catch((err) => {
            console.log(err);
        }).finally(() => {
            dispatch(setLoadingBtn(false))
        })
    }

    function handleUpdateAvatar(link: IAvatar): void {
        dispatch(setLoadingBtn(true))
        apiTS.changeAvatar(link).then(data => {
            dispatch(setCurrentUser(data))
            closeAllPopups();
        }).catch((err) => {
            console.log(err);
        }).finally(() => {
            dispatch(setLoadingBtn(false))
        })
    }

    function handleAddPlaceSubmit(value: IPlace): void {
        dispatch(setLoadingBtn(true))
        apiTS.addCardToServer(value).then(data => {
            dispatch(addCard(data))
            closeAllPopups();
        }).catch((err) => {
            console.log(err);
        }).finally(() => {
            dispatch(setLoadingBtn(false))
        })
    }

    function handleAuthorize(email: string, password: string): void {
        auth.authorize(email, password).then((data) => {
            if (data.token) {
                dispatch(setLoggedIn(true))
                dispatch(setCurrentEmail(email))
                history.push('/')
            }
        }).catch((err) => {
            dispatch(setFailPopupOpen(true))
            console.log(err)
        });
    }

    function handleRegister(email: string, password: string): void {
        auth.register(email, password).then((response) => {
            dispatch(setSuccessPopupOpen(true))
            history.push('/sign-in')
        }).catch((err) => {
            console.log(err)
            dispatch(setFailPopupOpen(true))
        })
    }

    function signOut() {
        localStorage.removeItem('jwt');
        history.push('/sign-in');
        dispatch(setLoggedIn(false))
        dispatch(setCurrentEmail(''))
    }

    return (
            <div className="App">
                <div className="page">
                    <div className="page__wrapper">
                        <SuccessPopup onClose={closeAllPopups}
                                      isOpen={successPopupOpen}/>
                        <FailPopup onClose={closeAllPopups} isOpen={failPopupOpen}/>
                        <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
                        <EditProfilePopup onUpdateUser={handleUpdateUser}
                                          onClose={closeAllPopups}/>
                        <EditAvatarPopup onUpdateAvatar={handleUpdateAvatar}
                                         onClose={closeAllPopups}/>

                        <AddPlacePopup onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit}/>
                        <PopupWithSubmit onClose={closeAllPopups}
                                         onSubmit={handleCardDeleteSubmit}
                                         cardToDelete={cardToDelete}/>
                        <Header currentEmail={currentEmail} signOut={signOut}/>
                        <Switch>
                            <Route exact path="/">
                                {loggedIn ? <Main onCardLike={handleCardLike}
                                                  onCardDelete={handleCardDelete}/> :
                                    <Redirect to="/sign-in"/>}
                            </Route>
                            <Route path="/sign-in">
                                <Login handleAuthorize={handleAuthorize}/>
                            </Route>
                            <Route path="/sign-up">
                                <Register handleRegister={handleRegister}/>
                            </Route>
                            <Route path="/">
                                {loggedIn ? <Redirect to="/"/> : <Redirect to="/sign-in"/>}
                            </Route>
                        </Switch>
                        <Footer/>
                    </div>
                </div>
            </div>
    );
}

export default App;
