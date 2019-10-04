import React from 'react';
import './output.css';


const userOutput = (props) => {
    return (
        <div className='UserOutput'>
            <p>Username: {props.userName}</p>
            <p>Great To Meet You {props.userName}</p>
        </div>
    )
}

export default userOutput;
