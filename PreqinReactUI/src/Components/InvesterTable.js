import React, { useState, useEffect } from 'react';
import InvestorRow from './InvesterRow';

const InvestorTable = ({onInvestorClick}) => {
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
  };

export default InvestorTable;