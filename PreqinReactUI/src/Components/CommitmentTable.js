import React, { useState, useEffect } from 'react';
import CommitmentRow from './CommitmentRow';
import FormatNumber from './Utils';

 
const CommitmentTable = (investorId,showCommitmentDetails) => {
  const [commitments, setCommitments] = useState([]);
  const investorIdString = investorId.investorId;

  const [asset, setAssets] = useState([]);
  const [uniqueAssetIds, setUniqueAssetIds] = useState([]); 
  const [tableData, setTableData] = useState([]);
  const [isLoading, setIsLoading] = useState(false); 

  const [unfilteredCommitment, setUnfilteredCommitments] = useState([commitments]);

  function handleAssetClassClick(e) {

    //setUnfilteredCommitments(commitments);
     setCommitments(unfilteredCommitment.filter(x=> x.assetClass == e));
     
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
      setUnfilteredCommitments(data);
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
   
   
  }, [investorIdString]);

  useEffect(() => {
    if (asset.length !== 0) {

      const uniqueAssetData = [...new Set(
        asset.map(commitment => ({
          assetId: commitment.assetId,
          assetClass: commitment.assetClass,
          assetValues: commitment.assetValues,
          assetAmount: commitment.amount,
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
        <th>{FormatNumber(uniqueAssetIds.reduce((acc, item) => acc + Number(item.assetAmount), 0))}</th>
        {[...new Set(uniqueAssetIds.map(item => item.assetValues))].map(
           (assetValues) => (
           
             <th key={assetValues}>{FormatNumber(assetValues)}</th>
       
             
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
};

export default CommitmentTable;