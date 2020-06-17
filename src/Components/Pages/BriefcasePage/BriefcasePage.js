import React from 'react';
import BriefcaseTable from './BriefcaseTable';



const BriefcasePage = ({username}) => {
    return(
        <>
            <BriefcaseTable username={username}/>
        </>
    )
}

export default BriefcasePage;