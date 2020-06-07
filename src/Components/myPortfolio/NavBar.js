import React, {useState} from 'react';
import styled from 'styled-components';
import NavButton from './NavButton'
import StepButton from './StepButton';
import DropDown from './DropDown';

const ButtonContainer = styled.div`
    display: flex;
    position: fixed;
    bottom: 10px;
`;

const NavBar = ({shares, sharesPerPage, updateSharesPerPage, updateDisplayRange}) =>{
    
    const [selectedButton, updateSelectedButton] = useState("1");
    const [currentlyDisplaying, updateCurrentlyDisplaying] = useState([1, sharesPerPage]);
    const [visibleButtons, updateVisibleButtons] = useState([1,2]);
    const [lastButton, updateLastButton] = useState(Math.ceil(shares.length/sharesPerPage));
    
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
                            shouldDisplay={visibleButtons.includes(count)} 
                            updateSelectedButton={updateSelectedButton}
                            updateDisplayRange={updateDisplayRange}
                            updateCurrentlyDisplaying = {updateCurrentlyDisplaying}
                            sharesPerPage={sharesPerPage}/>)
                            

            count++;
            fromRange+=sharesPerPage;
            toRange +=sharesPerPage;
            toRange = toRange > shares.length ? shares.length : toRange;
        }
        return buttons;
    }

    const handleClickGoToFirstPage = () =>{
        if(selectedButton == "1")
            return;
        updateVisibleButtons([1, 2]);
        let element = document.getElementById('1');
        updateSelectedButton('1');
        element.click()
        
    }

    const handleClickGoToLastPage = () =>{
        if(selectedButton == lastButton)
            return;
        updateVisibleButtons([lastButton-1, lastButton]);
        let element = document.getElementById(lastButton);
        element.click()
        
    }

    const handleClickPrevious = () =>{
        if(selectedButton == "1")
            return;
        if(selectedButton == visibleButtons[0]){
            const newButtonsToDisplay = visibleButtons.map(value => value - 2);
            updateVisibleButtons(newButtonsToDisplay);
            let element = document.getElementById(newButtonsToDisplay[1].toString());
            element.click();
            return;
        }
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
        if(selectedButton == visibleButtons[1]){
            const newButtonsToDisplay = visibleButtons.map(value => value +2);
            updateVisibleButtons(newButtonsToDisplay);
            let element = document.getElementById(newButtonsToDisplay[0].toString());
            element.click();
            return;
        }
        const currentButtonAsNumber = parseInt(selectedButton);
        const nextButton = currentButtonAsNumber + 1;
        const constNewButtonAsString = nextButton.toString();
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
        <button>...</button>
        <StepButton handleClick={handleClickNext} text=">"/>
        <StepButton handleClick={handleClickGoToLastPage} text=">>"/>
        <p>Visar: {currentlyDisplaying[0]} - {currentlyDisplaying[1]} av {shares.length}</p>
        <DropDown handleClickGoToFirstPage={handleClickGoToFirstPage} shares={shares} updateSharesPerPage={updateSharesPerPage} updateLastButton={updateLastButton}/>
        </ButtonContainer>
    )
}

export default NavBar;