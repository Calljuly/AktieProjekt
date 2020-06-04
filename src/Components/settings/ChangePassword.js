import React from 'react'
import styled from 'styled-components'

const ChangePassword = () =>{
    const ChangePassDivStyle = styled.div`
    
    width: 90%;
    height: 70%;
    
    `;
    const PasswordForm = styled.form`
        display: flexbox;
        width:70%;
        text-align:left;
        padding:30px; 
        justify-content: left;
        
    `;
    const InputStyle = styled.input`
    width: 100%;
    height: 39px;
    border: 1px solid #EBEDF2;
    border-radius: 4px;
    opacity: 1;
    margin:10px;
    `;
    const LableStyle = styled.label`
    width: 100%;
    height: 12px;
    text-align: left;
    font-family:Poppins;
    font-size:30px;
    letter-spacing: -0.01px;
    color: #A1A8C3;
    opacity: 1;
    margin:10px;     
    `;

    return (<ChangePassDivStyle>
                <PasswordForm>
                    <LableStyle name="CurrentPass">Nuvarande lösenord : </LableStyle>
                    <InputStyle type="text" value="currentPass"></InputStyle>
                    <LableStyle name="NewPass">Nytt lösenord : </LableStyle>
                    <InputStyle type="password" value="newPass"></InputStyle>
                    <LableStyle name="NewPassAgain">Bekräfta nytt lösenord : </LableStyle>
                    <InputStyle type="password" value="newPassAgain"></InputStyle>
                </PasswordForm>
        </ChangePassDivStyle>)

}
export default ChangePassword;