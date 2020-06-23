import React, {useState, useEffect} from 'react';
import NavButton from './NavButton'
import StepButton from './StepButton';
import DropDown from './DropDown';
import {Button, P, ButtonContainer, SectionBtnCont} from './Styles'



const NavBar = ({shares, sharesPerPage, updateSharesPerPage, updateDisplayRange}) =>{
    
    const [selectedButton, setSelectedButton] = useState(1);
    const [visibleButtons, setVisibleButtons] = useState([1,2,3,4]);
    const [totalNumberOfButtons, setTotalNumberOfButtons] = useState(Math.ceil(shares.length/sharesPerPage));
    const [currentlyDisplaying, setCurrentlyDisplaying] = useState([0, sharesPerPage]);
    
    useEffect(()=>{
        handleClickGoToFirstPage();
    }, [totalNumberOfButtons]);
    
    const makeButtons = () => {
        let buttons = [];
        let count = 1;
        let fromRange = 0;
        let toRange = sharesPerPage;
        while(count <= totalNumberOfButtons){
            buttons.push(<NavButton
                            text={count}
                            key = {count}
                            id={count}
                            range={[fromRange, toRange]} 
                            selected={selectedButton == count}
                            shouldDisplay={visibleButtons.includes(count)} 
                            updateSelectedButton={setSelectedButton}
                            updateDisplayRange={updateDisplayRange}
                            updateCurrentlyDisplaying = {setCurrentlyDisplaying}
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
        setVisibleButtons([1, 2, 3, 4]);
        let element = document.getElementById(1);
        element.click()
        
    }

    const handleClickGoToLastPage = () =>{
        if(selectedButton == totalNumberOfButtons)
            return;
        setVisibleButtons([totalNumberOfButtons-3, totalNumberOfButtons-2, totalNumberOfButtons-1, totalNumberOfButtons]);
        let element = document.getElementById(totalNumberOfButtons);
        element.click()
        
    }

    const handleClickPrevious = () =>{
        if(selectedButton == 1)
            return;
        
        const newButton = selectedButton -1;
        const newButtonElement = document.getElementById(newButton);

        if(newButton < visibleButtons[0]){
            const newButtonsToDisplay = visibleButtons.map(value => value - 1);
            setVisibleButtons(newButtonsToDisplay);
            newButtonElement.click();
            return;
        }
        setSelectedButton(newButton);
        newButtonElement.click()
        
    }

    const handleClickNext = () =>{
        if(selectedButton == totalNumberOfButtons)
            return;
        
        const newButton = selectedButton + 1;
        const newButtonElement = document.getElementById(newButton);

        if(newButton > visibleButtons[3]){
            const newButtonsToDisplay = visibleButtons.map(value => value + 1);
            setVisibleButtons(newButtonsToDisplay);
            newButtonElement.click();
            return;
        }
        setSelectedButton(newButton);
        newButtonElement.click()
        
    }

    const handleChange = () =>{
        const e = document.getElementById("sharesPerPage");
        const selection = e.options[e.selectedIndex].text;
        const selectionAsNum = parseInt(selection);
        updateSharesPerPage(selectionAsNum);
        updateDisplayRange([0, selectionAsNum]);
        setTotalNumberOfButtons(Math.ceil(shares.length/selectionAsNum));
        
    }

    
    

    return(
        <ButtonContainer>
            <SectionBtnCont>
                <StepButton handleClick={handleClickGoToFirstPage} text="<<"/>
                <StepButton handleClick={handleClickPrevious} text="<"/>
                {
                    makeButtons()
                }
                <Button style={{backgroundColor: 'white'}}>...</Button>
                <StepButton handleClick={handleClickNext} text=">"/>
                <StepButton handleClick={handleClickGoToLastPage} text=">>"/>
            </SectionBtnCont>
            <SectionBtnCont>
                <DropDown shares={shares} onChange={handleChange}/>
                <P>Visar: {currentlyDisplaying[0]} - {currentlyDisplaying[1]} av {shares.length}</P>
            </SectionBtnCont>
        </ButtonContainer>
    )
}

export default NavBar;