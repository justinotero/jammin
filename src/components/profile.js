import React from 'react';
import { Link } from 'gatsby';
import { useIdentityContext } from 'react-netlify-identity';
import '@reach/tabs/styles.css';

const Profile = ( { showModal }) => {
    const identity = useIdentityContext();
    const isLoggedIn = identity && identity.isLoggedIn;

    const name =
        identity &&
        identity.user &&
        identity.user.user_metadata &&
        identity.user.user_metadata.full_name;

    return (
        isLoggedIn &&
        <div className="dashboard-header">
            <nav>
                <Link to="/dashboard/overview"
                      activeClassName="active"
                >Overview</Link>
                <Link to="/dashboard/settings"
                      activeClassName="active"
                >Settings</Link>
            </nav>
            <span>Logged in as {name}. <button onClick={showModal}>Logout</button></span>
        </div>
    )
};

export default Profile;
