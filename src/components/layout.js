import React from 'react';
import { Link } from 'gatsby';
import './layout.css';
import { IdentityContextProvider } from 'react-netlify-identity-widget';

const Layout = ({ children }) => (
    <IdentityContextProvider url="https://jammin.netfliy.com">
        <header>
            <Link to="/">Jamstack App</Link>
        </header>
        <main>{children}</main>
    </IdentityContextProvider>
)

export default Layout;
