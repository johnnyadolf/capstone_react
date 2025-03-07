import Nav from "./Nav";
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <header>
            <Link to="/"><img src="../main_logo.png" alt="Little Lemon logo" /> </Link>
            <Nav />
        </header>
    );
};

export default Header;