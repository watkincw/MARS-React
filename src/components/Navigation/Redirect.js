import React from 'react';
import { useNavigate } from 'react-router-dom';

function Redirect() {
    let navigate = useNavigate();

    const handleClick = () => {
        navigate('/profile');
    }
    return (
        <div>
            <button onClick={handleClick}>Go to Profile</button>
        </div>
    );
}

export default Redirect;