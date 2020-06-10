import React from 'react';
import {Button} from './Styles'

const StepButton = ({handleClick, text}) => {
    return <Button onClick={handleClick}>{text}</Button>
}

export default StepButton;