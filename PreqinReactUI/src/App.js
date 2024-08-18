import React , { useState, useEffect } from 'react';
import { BrowserRouter,  Link, } from 'react-router-dom';
import InvestorTable from './Components/InvesterTable';
import CommitmentTable from './Components/CommitmentTable';
import CommitmentRow from './Components/CommitmentRow';
import AssetTable from './Components/AssetTable';
import InvestorRow from './Components/InvesterRow';

const App = () => {



const [showCommitmentDetails, SetShowCommitmentDetails] = useState(false);
const[investorId, SetInvestorId] = useState([]);

//Call back function for Investor click
function onInvestorClick(e) {
  SetShowCommitmentDetails(true);
  SetInvestorId(e);
    console.log(e);
  }


  return (
    <>
    <InvestorTable onInvestorClick ={onInvestorClick}/>
    {showCommitmentDetails ? <CommitmentTable investorId={investorId} showCommitmentDetails={showCommitmentDetails} /> : <></>}
   
   
    </>
  );
};

export default App;



  