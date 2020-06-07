import React, {useState} from 'react';
import styled from 'styled-components';
import NavButton from './NavButton'
import StepButton from './StepButton';

const ButtonContainer = styled.div`
    display: flex;
    position: fixed;
    bottom: 10px;
`;

const NavBar = ({shares, sharesPerPage, updateDisplayRange}) =>{
    
    const [selectedButton, updateSelectedButton] = useState("1");
    
    const makeButtons = () => {
        const numberOfButtons = Math.ceil(shares.length/sharesPerPage);
        let buttons = [];
        let count = 1;
        let fromRange = 0;
        let toRange = sharesPerPage;
        while(count <= numberOfButtons){
            buttons.push(<NavButton
                            text={count}
                            id={count}
                            key = {count}
                            range={[fromRange, toRange]} 
                            selected={selectedButton == count} 
                            updateSelectedButton={updateSelectedButton}
                            updateDisplayRange={updateDisplayRange}/>)
            count++;
            fromRange+=sharesPerPage;
            toRange +=sharesPerPage;
        }
        return buttons;
    }

    const handleClickGoToFirstPage = () =>{
        if(selectedButton == "1")
            return;
        let element = document.getElementById('1');
        updateSelectedButton('1');
        element.click()
        
    }

    const handleClickGoToLastPage = () =>{
        const lastButton = Math.ceil(shares.length/sharesPerPage).toString();
        if(selectedButton == lastButton)
            return;
        let element = document.getElementById(lastButton);
        updateSelectedButton(lastButton);
        element.click()
        
    }

    const handleClickPrevious = () =>{
        if(selectedButton == "1")
            return;
        const currentButtonAsNumber = parseInt(selectedButton);
        const newButton = currentButtonAsNumber - 1;
        const constNewButtonAsString = newButton.toString();
        let element = document.getElementById(constNewButtonAsString);
        updateSelectedButton(constNewButtonAsString);
        element.click()
        
    }

    const handleClickNext = () =>{
        if(selectedButton == Math.ceil(shares.length/sharesPerPage))
            return;
        const currentButtonAsNumber = parseInt(selectedButton);
        const newButton = currentButtonAsNumber + 1;
        const constNewButtonAsString = newButton.toString();
        let element = document.getElementById(constNewButtonAsString);
        updateSelectedButton(constNewButtonAsString);
        element.click()
        
    }

    return(
        <ButtonContainer>
        <StepButton handleClick={handleClickGoToFirstPage} text="<<"/>
        <StepButton handleClick={handleClickPrevious} text="<"/>
        {
            makeButtons()
        }
        <StepButton handleClick={handleClickNext} text=">"/>
        <StepButton handleClick={handleClickGoToLastPage} text=">>"/>
        </ButtonContainer>
    )
}

export default NavBar;