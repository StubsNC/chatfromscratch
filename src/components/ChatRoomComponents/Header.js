import React from 'react';

const Header = ({ room }) => {
    return (
        <div className="display-1 h-100 d-flex align-items-center justify-content-center">
            <h2> Welcome to: {room}</h2>
        </div>
    );
};

export default Header;
