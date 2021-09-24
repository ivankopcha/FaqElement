import React from 'react';
import styled from 'styled-components';


const Button = ({text, onClick}) => (
    <SendButton onClick={onClick}>{text}</SendButton>
);


const SendButton = styled.button`
    color: red;
    background-color: green;
`

export default Button;