import React, { useState } from 'react';

import Button from '../Button/Button';

const sendToServer = () => {
}

const SendButton = () => {
    
}

const FaqItem2 = ({title, content}) => {
    const [status, changeStatus] = useState(false);
    const [value, changeValue] = useState("");

    const handleClick = () => {
        changeStatus(!status);
    }

    const handleChange = (e) => {
        changeValue(e.target.value);
    }

    const sendData = () => {
        sendToServer(value)
    }

    return (
        <div>
            {/* <div onClick={() => handleClick()}>{title}</div> */}
            <input value={value} onChange={(e) => handleChange(e)} />
            <Button text="send" onClick={handleClick} />
            {status && (
                <div>{content}</div>
            )}
        </div>
    )
};


export default FaqItem2;