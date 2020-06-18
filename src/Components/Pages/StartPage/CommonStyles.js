import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Main = styled.div`
    margin: 0.5em;
    padding: 0.5em;
`;

export const TitleButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #EDEFF3;
    padding: 0.5em;
`;

export const Button = styled(Link)`
    border-radius: 5px;
    background-color: rgb(70, 67, 67);
    color: white;
    border: none;
    font-size: 0.9em;
    padding: 0.5em;
    text-decoration: none;
`;