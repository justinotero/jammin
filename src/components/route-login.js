import React from 'react';
import { useIdentityContext } from 'react-netlify-identity';
import { navigate } from 'gatsby';

const RouteLogin = () => {
    const identity = useIdentityContext();

    if (identity && identity.isLoggedIn) {
        navigate('/dashboard/settings', { replace: true });
    }

    return (
        <>
            <h1>Log in or Sign up</h1>
            <button>Log in</button>
        </>
    );
}

export default RouteLogin;
