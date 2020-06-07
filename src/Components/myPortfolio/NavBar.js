import React, {useState} from 'react';
import styled from 'styled-components';
import NavButton from './NavButton'

const ButtonContainer = styled.div`
    display: flex;
`;

const NavBar = ({shares, updateDisplayRange}) =>{
    const [selectedButton, updateSelectedButton] = useState("1");
    
    const makeButtons = () => {
        //five for each page
        const numberOfButtons = Math.ceil(shares.length/5);
        let buttons = [];
        let count = 1;
        let fromRange = 0;
        let toRange = 5;
        while(count <= numberOfButtons){
            buttons.push(<NavButton 
                            range={[fromRange, toRange]} 
                            updateSelectedButton={updateSelectedButton}
                            selected={selectedButton == count} 
                            text={count}
                            updateDisplayRange={updateDisplayRange}/>)
            count++;
            fromRange+=5;
            toRange +=5;
        }
        return buttons;
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