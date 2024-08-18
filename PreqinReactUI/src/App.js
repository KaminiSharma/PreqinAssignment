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


// Investor Row Component
/* const InvestorRow = ({ investor }) => {
  const commitmentDetails = `/CommitmentDetails/${investor.id}`;
 
return (
  <BrowserRouter>
  <tr>
    <td>{investor.id}</td>
    <td>{investor.name}</td>
    <td>{investor.type}</td>
    <td>{investor.dateAdded}</td>
    <td>{investor.address}</td>
    <td>
    <Link to={commitmentDetails} onClick={() => onInvestorClick(investor.id)}>{investor.totalCommitments}</Link>
    </td>
    
    
  </tr>
  </BrowserRouter>
);
}; */

/* const InvestorTable = () => {
  const [investors, setInvestors] = useState([]);
  

  useEffect(() => {
    const fetchInvestors = async () => {
      const response = await fetch('https://localhost:7027/Investors');
      const data = await response.json();
      setInvestors(data);
    };

    fetchInvestors();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Type</th>
          <th>Date Added</th>
          <th>Address</th>
          <th>Total Commitment</th>
        </tr>
      </thead>
      <tbody>
        {investors.map(investor => (
          <InvestorRow key={investor.id} investor={investor} onInvestorClick={onInvestorClick}/>
        ))}
      </tbody>
    </table>
  );
}; */

/* const CommitmentTable = (investorId) => {
  const [commitments, setCommitments] = useState([]);
  const [asset, setAssets] = useState([]);
  const [uniqueAssetIds, setUniqueAssetIds] = useState([]); 
  const [tableData, setTableData] = useState([]);
  const [isLoading, setIsLoading] = useState(false); 
  const investorIdString = investorId.investorId;
  const [unfilteredCommitment, setUnfilteredCommitments] = useState([commitments]);

  function handleAssetClassClick(e) {

   setUnfilteredCommitments(commitments);
    setCommitments(commitments.filter(x=> x.assetClass == e));
    
  }
  console.log(commitments)

  function handleAllClick(e){
   
    console.log(unfilteredCommitment)
    setCommitments(unfilteredCommitment);

  }


  useEffect(() => {
    const fetchCommitments = async () => {
      setIsLoading(true);
      try{
      const response = await fetch(`https://localhost:7027/Commitments/${investorIdString}`);
      if (response.ok) {
      const data = await response.json();
      setCommitments(data);
      setAssets(data);
      }
    }
      catch (error) {
        // Handle unexpected errors (optional)
        console.error('Unexpected error:', error);
      } finally {
        setIsLoading(false); // Set loading state to false regardless of success or failure
      };
      //setAssets(commitments.map(commitment => commitment.assetId));
     
      }
    ;
    if (investorIdString) {
      fetchCommitments();
    }
   
   
  }, []);

  useEffect(() => {
    if (asset.length !== 0) {

      const uniqueAssetData = [...new Set(
        asset.map(commitment => ({
          assetId: commitment.assetId,
          assetClass: commitment.assetClass,
          assetValues: commitment.assetValues,
        }))
      )];

  
      setUniqueAssetIds(uniqueAssetData);
      console.log(uniqueAssetData);
    }
  }, [asset]); // Dependency on commitments array

  useEffect(() => {
    setTableData(commitments); // Update table data on prop change
  }, [commitments]); // Dependency on commitments prop

  
  console.log(typeof uniqueAssetIds)


  return (
    <div>
      { uniqueAssetIds.length !== 0 ? 
     <table>
     <thead>
       <tr>
         <th onClick={() => handleAllClick('All')}>All</th>
         
        
        {[...new Set(uniqueAssetIds.map(item => item.assetClass))].map(
          (assetClass) => (
          
            <th key={assetClass}  onClick={() => handleAssetClassClick(assetClass)} >{assetClass}</th>
      
            
          )
        )}
       </tr>
     </thead>
     <tbody>
    
      
       <tr>
       <th>{uniqueAssetIds.reduce((acc, item) => acc + Number(item.assetValues), 0)}</th>
       {[...new Set(uniqueAssetIds.map(item => item.assetValues))].map(
          (assetValues) => (
          
            <th key={assetValues}>{assetValues}</th>
      
            
          )
        )}
       </tr>
     </tbody>
   </table>
      :
      <></>
}
   
    <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Asset Class</th>
              <th>Currency</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((commitment) => (
               <CommitmentRow  commitment={commitment} />
            ))}
          </tbody>
        </table>
        </div>
  );
}; */




  return (
    <>
    <InvestorTable onInvestorClick ={onInvestorClick}/>
    {showCommitmentDetails ? <CommitmentTable investorId={investorId} showCommitmentDetails={showCommitmentDetails} /> : <></>}
   
   
    </>
  );
};

export default App;



  