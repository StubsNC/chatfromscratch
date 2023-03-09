import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BetaLandingPage.css'

function BetaLandingPage() {
    const history = useNavigate();

    function handleJoinBetaClick() {
        history.push('/app');
    }

    return (
        <div className="joinBeta container py-5">
            <h1 className="text-center mb-4">Join The Beta Now</h1>
            <p className="text-center mb-5">
                Join the beta for our new app designed specifically for gamers! Share your favorite gaming clips and chat with your friends while enjoying a brand new social experience. With our app, you'll be able to easily grab and share your game clips, as well as create montages to show off your gaming skills like never before. Don't miss out on this exciting opportunity to connect with fellow gamers and take your gaming experience to the next level.
            </p>
            <button className="btn btn-primary d-block mx-auto mb-5" onClick={handleJoinBetaClick}>Join Beta</button>
        </div>
    );
}

export default BetaLandingPage;
