import React from 'react';
import { Link } from 'gatsby';

const Profile = () => {
    return (
        <div className="dashboard-header">
            <nav>
                <Link to="/dashboard/overview"
                      activeClassName="active"
                >Overview</Link>
                <Link to="/dashboard/settings"
                      activeClassName="active"
                >Settings</Link>
            </nav>
            <span>TODO Show login status</span>
        </div>
    )
};

export default Profile;
