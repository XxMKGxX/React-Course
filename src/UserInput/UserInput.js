import React from 'react';

const userInput = (props) => {
    const style = {
        border: '2px solid orange'
    }
    return <input type="text" 
    onChange={props.changed}
    style={style} 
    value={props.currentName}/>
}

export default userInput;