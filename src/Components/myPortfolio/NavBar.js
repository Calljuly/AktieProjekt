import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import NavButton from './NavButton'
import StepButton from './StepButton';
import DropDown from './DropDown';
import {Button, P} from './StylesMyPortfolio'

const ButtonContainer = styled.div`
    display: flex;
    position: fixed;
    bottom: 10px;
`;

const NavBar = ({shares, sharesPerPage, updateSharesPerPage, updateDisplayRange}) =>{
    
    const [selectedButton, updateSelectedButton] = useState(1);
    const [visibleButtons, updateVisibleButtons] = useState([1,2]);
    const [lastButton, updateLastButton] = useState(Math.ceil(shares.length/sharesPerPage));
    const [currentlyDisplaying, updateCurrentlyDisplaying] = useState([0, sharesPerPage]);
    
    useEffect(()=>{
        handleClickGoToFirstPage();
    }, [lastButton]);
    
    const makeButtons = () => {
        let buttons = [];
        let count = 1;
        let fromRange = 0;
        let toRange = sharesPerPage;
        while(count <= lastButton){
            buttons.push(<NavButton
                            text={count}
                            key = {count}
                            id={count}
                            range={[fromRange, toRange]} 
                            selected={selectedButton == count}
                            shouldDisplay={visibleButtons.includes(count)} 
                            updateSelectedButton={updateSelectedButton}
                            updateDisplayRange={updateDisplayRange}
                            updateCurrentlyDisplaying = {updateCurrentlyDisplaying}
                            />)
                            

            count++;
            fromRange+=sharesPerPage;
            toRange +=sharesPerPage;
            toRange = toRange > shares.length ? shares.length : toRange;
        }
        return buttons;
    }

    const handleClickGoToFirstPage = () =>{
        if(selectedButton == 1)
            return;
        updateVisibleButtons([1, 2]);
        let element = document.getElementById(1);
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
        if(selectedButton == 1)
            return;
        
        const newButton = selectedButton -1;
        const newButtonElement = document.getElementById(newButton);

        if(newButton < visibleButtons[0]){
            const newButtonsToDisplay = visibleButtons.map(value => value - 2);
            updateVisibleButtons(newButtonsToDisplay);
            newButtonElement.click();
            return;
        }
        updateSelectedButton(newButton);
        newButtonElement.click()
        
    }

    const handleClickNext = () =>{
        if(selectedButton == lastButton)
            return;
        
        const newButton = selectedButton + 1;
        const newButtonElement = document.getElementById(newButton);

        if(newButton > visibleButtons[1]){
            const newButtonsToDisplay = visibleButtons.map(value => value +2);
            updateVisibleButtons(newButtonsToDisplay);
            newButtonElement.click();
            return;
        }
        updateSelectedButton(newButton);
        newButtonElement.click()
        
    }

    const handleChange = () =>{
        const e = document.getElementById("sharesPerPage");
        const selection = e.options[e.selectedIndex].text;
        const selectionAsNum = parseInt(selection);
        updateSharesPerPage(selectionAsNum);
        updateDisplayRange([0, selectionAsNum]);
        updateLastButton(Math.ceil(shares.length/selectionAsNum));
        
    }

    
    

    return(
        <ButtonContainer>
        <StepButton handleClick={handleClickGoToFirstPage} text="<<"/>
        <StepButton handleClick={handleClickPrevious} text="<"/>
        {
            makeButtons()
        }
        <Button style={{backgroundColor: 'white'}}>...</Button>
        <StepButton handleClick={handleClickNext} text=">"/>
        <StepButton handleClick={handleClickGoToLastPage} text=">>"/>
        <P>Visar: {currentlyDisplaying[0]} - {currentlyDisplaying[1]} av {shares.length}</P>
        <DropDown sharesPerPage={sharesPerPage} onChange={handleChange}/>
        </ButtonContainer>
    )
}

export default NavBar;