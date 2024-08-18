import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import React, { useContext } from 'react';
import CommitmentTable from './CommitmentTable';
import FormatNumber from './Utils';


const CommitmentRow = ({ commitment }) => {
    
    
  return (
  
    <tr>
      <td>{commitment.id}</td>
      <td>{commitment.assetClass}</td>
      <td>{commitment.currency}</td>
      <td>{FormatNumber(commitment.amount)}</td>
   
     
    </tr>
   
  );
};

export default CommitmentRow;