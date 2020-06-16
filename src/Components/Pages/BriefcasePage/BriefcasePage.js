import React from 'react';
import BriefcaseTable from './BriefcaseTable';



const BriefcasePage = ({user}) => {
    return(
        <>
            <BriefcaseTable user={user}/>
        </>
    )
}

export default BriefcasePage;