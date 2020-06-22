import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import AuthForm from "./AuthForm";
import '../css/bootstrap.css';
import AuthContext from "../contexts/AuthContext";
import LogoutForm from "./LogoutForm";
import Auth from "./Auth";
Bar.propTypes = {

};

function Bar(props) {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <div className="navbar-header navbar-brand">Leto Social</div>
                <div className="navbar-collapse ">

                </div>
                <Auth />
            </div>
        </nav>
    );
}

export default Bar;