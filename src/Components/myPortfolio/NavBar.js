import React, {useState} from 'react';
import styled from 'styled-components';
import NavButton from './NavButton'

const ButtonContainer = styled.div`
    display: flex;
`;

const NavBar = ({shares, displayRange, updateDisplayRange}) =>{
    const [selectedButton, updateSelectedButton] = useState("1");
    
    const makeButtons = () => {
        //five for each page
        const numberOfButtons = Math.ceil(shares.length/5);
        let buttons = [];
        let count = 1;
        while(count <= numberOfButtons){
            buttons.push(<NavButton handleClick={handleClick} selected={selectedButton == count} text={count}/>)
            count++;
        }
        return buttons;
    }

    const handleClick = (e) =>{
        const btn = e.target.innerText;
        updateSelectedButton(btn);
        const from = displayRange[0];
        const to = displayRange[1];
        updateDisplayRange([from+5, to+5]);

    }

    return(
        <ButtonContainer>
            {
                makeButtons()
            }
        </ButtonContainer>
    )
}

export default NavBar;