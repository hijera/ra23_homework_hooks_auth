import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import AuthContext from "../contexts/AuthContext";

LogoutForm.propTypes = {};

function LogoutForm(props) {
    const {handleLogout, token, profile} = useContext(AuthContext);
    const handleSubmit = evt => {
        evt.preventDefault();
        handleLogout();
    };

    return (
        <>
            {token &&
            <form onSubmit={handleSubmit}>
                Hello, {profile.name ? profile.name : 'Guest'}
                <span className="offset-item">
                    <img src={profile.avatar} className="avatar" alt={"avatar"} />
                </span>
                <button type="btn btn-outline-success my-2 my-sm-0" className="btn btn-danger">Logout</button>
            </form>
            }
        </>
    );
}

export default LogoutForm;