export const extractBriefCaseInformation = (jsonImport) => {
    
    const briefCase = jsonImport;
    let companyInformation = [];
    let shareInformation = [];

    try{
        briefCase.map(industry => {
            companyInformation = companyInformation.concat(industry.arrayOfCompanies);
        });
        
        companyInformation.map(company =>{
            company.arrayOfShares.map(share =>{
                let tempObj = share;
                tempObj.company = company.company;
                shareInformation.push(tempObj);
            })
        })
    }
    catch(e){
        //do nothing, just return empty array
    }
    return shareInformation;
}