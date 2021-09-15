import {FC} from "react";
import moment from "moment";

const Footer: FC = () => {

    const currentYear = moment().format('YYYY')
    
    return (
        <footer className="footer">
            <p className="footer__copyright">© {currentYear} Mesto Russia</p>
        </footer>
    )
}

export default Footer