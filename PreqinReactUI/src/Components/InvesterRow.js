import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import React, { useContext } from 'react';
import FormatNumber from './Utils';
import CommitmentTable from './CommitmentTable';


const InvestorRow = ({ investor, onInvestorClick }) => {
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
      <Link to={commitmentDetails} onClick={() => onInvestorClick(investor.id)}>{FormatNumber(investor.totalCommitments)}</Link>
      </td>
      
      
    </tr>
    </BrowserRouter>
  );
  };

export default InvestorRow;