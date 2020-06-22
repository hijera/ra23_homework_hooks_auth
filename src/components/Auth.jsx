import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import AuthForm from "./AuthForm";
import LogoutForm from "./LogoutForm";
import AuthContext from "../contexts/AuthContext";

Auth.propTypes = {};

function Auth(props) {
    const {handleLogin, handleLogout, token, profile} = useContext(AuthContext);
    return (
        <>
            {!token && <AuthForm/>}
            {token && <LogoutForm/>}
        </>
    );
}

export default Auth;