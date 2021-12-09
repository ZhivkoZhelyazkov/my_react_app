import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import * as authService from '../services/authService';
import { AuthContext } from '../contexts/AuthContext';


const Logout = () => {
    const navigate = useNavigate();
    const { user, logout } = useContext(AuthContext);
    useEffect(() => {
        authService.logout(user.accessToken)
            .then(() => {
                logout();
                navigate('/services');
            });
    }, []);

    return null;
};

export default Logout;