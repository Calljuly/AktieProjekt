import styled from 'styled-components'

export const HeaderStyle = styled.h1`
  color: #656565;
  text-align: left;
  font-size: 1.5em;
`;
export const MainDivStyle = styled.div`
  background-color: #F6FAFB;
  width: 80%;
  min-height: 100%;
  position: absolute;
  left: 20%;
  `;

export const HeaderContainer = styled.div`
  margin: 15px;
`;

export const DashBoardContainer = styled.div`
  min-height:90%;
  min-width:90%;
  margin:15px;
`;

export const InfoBoxStyle = styled.div`
/* display:block; */
background-color: #FFD98D;
border-radius: 5px;
font-size: 1em;
padding: 1em;

/* padding-left: 20px; */
width: 100%;
/* float: left;  */
/* margin: 15px; */
/* margin-top:20px; */
/* text-align: left; */
 `;

 export const MainContainer = styled.div`
    border-radius: 5px;
    color: #3C4368;
    display: flex;
    justify-content: space-between;
    background-color: #F6FAFB;
    height: fit-content;
    width: 100%;
    @media (max-width: 768px) {
        display: inline-block;
    }
`;

export const SubContainer = styled.div`
    min-height: 100%;
    width:48%;
    background-color: white;
    border-radius: 10px;
    margin: 0px;
    @media (max-width: 768px) {
        height: 50%;
        width: 90%;
        margin:auto;
    }

`;

