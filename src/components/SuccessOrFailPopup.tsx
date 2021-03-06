import {FC, SyntheticEvent} from "react";

type TSuccessOrFailPopup = {
    onClose(event: SyntheticEvent): void
    isOpen: boolean
    text: string
    className: string
}

const SuccessOrFailPopup: FC<TSuccessOrFailPopup> = (props) => {

    return (
        <div className={`popup  ${props.isOpen && 'popup_opened'}`}>
            <div className="popup__container">
                <button onClick={props.onClose} type="button" className="popup__button-close"/>

                <div className='success__popup_wrapper'>
                    <div className={props.className}/>
                    <h2 className="success__popup_text">{props.text}</h2>
                </div>
            </div>
        </div>
    )
}

export default SuccessOrFailPopup