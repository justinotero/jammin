import React, { useEffect } from 'react';
import { Router } from '@reach/router';
import { navigate } from 'gatsby';
import Layout from '../components/layout';
import Profile from '../components/profile';
import RouteBase from '../components/router-overview';
import RouteSecret from '../components/route-settings';
import RouteLogin from '../components/route-login';

const Dashboard = ({ location }) => {
    useEffect(() => {
        if (location.pathname.match(/^\/dashboard\/?$/)) {
            navigate('/dashboard/login', { replace: true })
        }
    }, [])
    return (
        <Layout>
            <Profile />
            <Router>
                <RouteBase path="/dashboard/overview"/>
                <RouteSecret path="/dashboard/settings"/>
                <RouteLogin path="/dashboard/login"/>
            </Router>
        </Layout>

    )
};

export default Dashboard;
