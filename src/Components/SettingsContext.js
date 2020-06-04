import React from 'react'

const SettingsContext = React.createContext({
    myProfilClicked : () =>{},
    changePassClicked : () => {},
    referenceClicked : () => {},
    currentStateOfSettings : 1

})
export default SettingsContext;