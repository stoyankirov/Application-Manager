import React from 'react';

const NavBar = () => {
    return(
        <nav>
            <a href="/"><h1 id="logo">Application Manager</h1></a>
            <div><a href="/" className="nav-link">Current applications</a></div>
            <div><a href="/create" className="nav-link">Create a new application</a></div>
        </nav>
    );
}

export default NavBar;
