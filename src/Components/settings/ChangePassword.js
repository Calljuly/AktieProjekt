import React from 'react'
import styled from 'styled-components'

const ChangePassword = () =>{
    const ChangePassDivStyle = styled.div`

    
    `;
    const InputStyle = styled.input`
    
    border: 1px solid #EBEDF2;
    border-radius: 4px;
    opacity: 1;
    `;
    const LableStyle = styled.label`
    text-align: left;
    font: Medium 12px/17px Poppins;
    letter-spacing: -0.01px;
    color: #A1A8C3;
    opacity: 1;    
    `;

    return (<div>
                <form>
                    <LableStyle name="CurrentPass">Nuvarande lösenord : </LableStyle>
                    <InputStyle type="text" value="currentPass"></InputStyle>
                    <LableStyle name="NewPass">Nytt lösenord : </LableStyle>
                    <InputStyle type="password" value="newPass"></InputStyle>
                    <LableStyle name="NewPassAgain">Bekräfta nytt lösenord : </LableStyle>
                    <InputStyle type="password" value="newPassAgain"></InputStyle>
                </form>
        </div>)

}
export default ChangePassword;