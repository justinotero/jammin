import React, { useEffect } from 'react';
import { Router } from '@reach/router';
import { navigate } from 'gatsby';
import IdentityModal from 'react-netlify-identity-widget';
import Layout from '../components/layout';
import Profile from '../components/profile';
import RouteBase from '../components/router-overview';
import RouteSecret from '../components/route-settings';
import RouteLogin from '../components/route-login';

import 'react-netlify-identity-widget/styles.css';

const Dashboard = ({ location }) => {
    useEffect(() => {
        const matchPaths = () => {
            if (location.pathname.match(/^\/dashboard\/?$/)) {
                navigate('/dashboard/login', { replace: true })
            }
        }
        matchPaths();
    }, [location])
    return (
        <Layout>
            <Profile />
            <Router>
                <RouteBase path="/dashboard/overview"/>
                <RouteSecret path="/dashboard/settings"/>
                <RouteLogin path="/dashboard/login"/>
            </Router>
            <IdentityModal
                showDialog={true} />
        </Layout>

    )
};

export default Dashboard;
