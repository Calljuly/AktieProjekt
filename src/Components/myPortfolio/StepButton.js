import React from 'react';
import styled from 'styled-components';

const StepButton = (props) => {
    return <button onClick={props.handleClick}>{props.text}</button>
}

export default StepButton;