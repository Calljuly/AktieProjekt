import React from 'react';
import BriefcaseTable from './BriefcaseTable';



const BriefcasePage = ({userName}) => {
    return(
        <>
            <BriefcaseTable userName={userName}/>
        </>
    )
}

export default BriefcasePage;