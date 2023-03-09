import React from 'react';
import logoWhite from '../../images/gamechat-icon-only-white.png'

function LandingPageHeader() {
    return (
        <header className="bg-dark py-3">
            <div className="container d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                    <img src={logoWhite} alt="Company logo" height="40" className="me-3" />
                    <h1 className="text-uppercase fw-bold mb-0 text-white">GameChat</h1>
                </div>
            </div>
        </header>
    );
}

export default LandingPageHeader;

