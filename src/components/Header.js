import header from '../assets/header.png';
import { Link } from 'react-router-dom';


const Header = () => {

    return (
        <header>
            <Link to="/">
                <img src={header} alt="header" />
            </Link>
        </header>
    );
}

export default Header;