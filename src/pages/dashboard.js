import React, { useEffect, useState } from 'react';
import { Router } from '@reach/router';
import { navigate } from 'gatsby';
import IdentityModal from 'react-netlify-identity-widget';
import Layout from '../components/layout';
import Profile from '../components/profile';
import RouteSecret from '../components/route-settings';
import RouteLogin from '../components/route-login';
import PrivateRoute from '../components/private-route';
import RouteOverview from '../components/router-overview';

const Dashboard = ({ location }) => {
    const [isVisible, setVisibility] = useState(false);
    const showModal = () => setVisibility(true);

    useEffect(() => {
        if (location.pathname.match(/^\/dashboard\/?$/)) {
            navigate('/dashboard/login', { replace: true });
        }
    }, [location.pathname]);
    return (
        <Layout>
            <Profile showModal={showModal} />
            <Router>
                <PrivateRoute path="/dashboard/overview" component={RouteOverview}/>
                <PrivateRoute path="/dashboard/settings" component={RouteSecret}/>
                <RouteLogin
                    path="/dashboard/login"
                    showModal={showModal}/>
            </Router>
            <IdentityModal
                aria-label="Login or Sign up"
                showDialog={isVisible}
                onCloseDialog={() => setVisibility(false)}/>
        </Layout>

    )
};

export default Dashboard;
