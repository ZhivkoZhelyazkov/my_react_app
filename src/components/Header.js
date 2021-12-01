import { Link } from 'react-router-dom';
let logger = <Link to="/login">Please Login</Link>;


function Header({
    isAuthenticated,
    user,
}) {
    return (
        <header className="header-link">
            <p className="tm-copyright-text">{isAuthenticated ? `Welcome ${user}` : logger}</p>
        </header>
    );
};

export default Header;