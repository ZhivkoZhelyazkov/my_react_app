import { Link } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';


let logger = <Link to="/login">Please Login</Link>;

const Header = () => {
    
    const { user } = useAuthContext();

    return (
        <header className="header-link">
            <p className="tm-copyright-text">{user.email ? `Welcome ${user.email.split('@')[0]}` : logger}</p>
        </header>
    );
};

export default Header;