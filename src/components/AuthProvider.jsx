import React,{useState} from 'react';
import PropTypes from 'prop-types';
import AuthContext from "../contexts/AuthContext";
import useStorage from "../hooks/useStorage";

export default function AuthProvider(props) {
    const [token, setToken] = useStorage(localStorage,'token');
    const [profile, setProfile] = useStorage(localStorage,'profile',true);
    const handleLogin = async (login = 'user', password = 'password') => {
        try {
            const response = await fetch(process.env.REACT_APP_HOST+process.env.REACT_APP_AUTH_LINK, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({login, password}),
            });

            if (response.status===401)
            {
                handleLogout();
            }

            if (!response.ok) {
                throw new Error('Auth failed');

            }
            const {token} = await response.json();

            const responseProfile= await fetch(process.env.REACT_APP_HOST+process.env.REACT_APP_PROFILE_LINK, {
                method: 'GET',
                headers: {'Content-Type': 'application/json','Authorization':'Bearer '+token},
            });

            if (responseProfile.status===401)
            {
                handleLogout();
            }


            if (!responseProfile.ok) {
                throw new Error('Profile info failed');

            }
            const profile=await responseProfile.json();
            console.log(profile);
            setProfile(profile);
            setToken(token);
        } catch (e) {
            throw new Error(e);
        }
    };
    const handleLogout = () => {
        setToken(null);
        setProfile(null);
    };
    return (<AuthContext.Provider value={{handleLogin, handleLogout, token, profile}}>
            {props.children}
        </AuthContext.Provider>
    );
}
