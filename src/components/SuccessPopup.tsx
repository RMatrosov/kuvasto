import SuccessOrFailPopup from "./SuccessOrFailPopup";
import {FC, SyntheticEvent} from "react";

type TSuccessPopupProps = {
    onClose(event: SyntheticEvent): void
    isOpen: boolean
}

const SuccessPopup: FC<TSuccessPopupProps> = ({onClose, isOpen}) => {

    const text = 'Вы успешно зарегистрировались!'
    const className = 'success__popup_img'

    return (
        <SuccessOrFailPopup onClose={onClose} isOpen={isOpen} text={text} className={className}/>
    )
}

export default SuccessPopup