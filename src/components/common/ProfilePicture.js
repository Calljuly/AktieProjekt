import React from 'react';
import {containerStyles, editSymbol, imageStyles} from './ProfilePictureStyles';




export default function ProfilePicture (props){
    
    return(
         
        <div style={containerStyles}>
            <div style={editSymbol}></div>
            <img style={imageStyles} src={require(`../../images/${props.pictureName.toLowerCase()}.jpg`)} alt='Profile'/>
        </div>
        
    );
}