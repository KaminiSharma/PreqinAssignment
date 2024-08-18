import React, { useState, useEffect } from 'react';



const AssetTable =(uniqueAssetIds) =>{


    const [uniqueAssets, setUniqueAssets] = useState([]); // State for unique assets
   
    

    useEffect(() => {
      if (uniqueAssetIds.length !== 0) {
        
        const uniqueSet = [...new Set(Array.from(uniqueAssetIds).map(item => ({
            assetId: item.assetId,
            assetClass: item.assetClass,
            assetValues: item.assetValues,
          })))];
        setUniqueAssets(uniqueSet);
      } else {
        setUniqueAssets([]); // Set empty array if uniqueAssetIds is null or undefined
      }
    }, [uniqueAssetIds]); // Dependency on uniqueAssetIds
    
    
       


return(
    <table>
    <thead>
      <tr>
        <th>All</th>
        {uniqueAssets.map((item) => (
           <th key={item}>{item.assetClass}</th> // Add key for unique rendering
          ))}
       
        
      </tr>
    </thead>
    <tbody>
      <tr>
     
      </tr>
    </tbody>
  </table>
);
};

export default AssetTable;