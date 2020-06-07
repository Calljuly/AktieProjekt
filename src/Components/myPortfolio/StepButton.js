import React from 'react';
import styled from 'styled-components';
import {Button} from './StylesMyPortfolio'

const StepButton = (props) => {
    return <Button onClick={props.handleClick}>{props.text}</Button>
}

export default StepButton;