import React from 'react';
import { Link } from 'gatsby';
import { IdentityContextProvider } from 'react-netlify-identity-widget';
import 'react-netlify-identity-widget/styles.css';

import './layout.css';

const Layout = ({ children }) => (
    <IdentityContextProvider
        url="https://jammin.netlify.com">
        <header>
            <Link to="/">Jamstack App</Link>
        </header>
        <main>{children}</main>
    </IdentityContextProvider>
)

export default Layout;
