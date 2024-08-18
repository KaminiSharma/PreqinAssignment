import React from "react";

const FormatNumber = (num) => {
    
    const xnum = Number(num);
    const suffixes = ["", "K", "M", "B"];
    const divisor = 1000;
  
    let i;
    for (i = suffixes.length - 1; i >= 1; i--) {
      if (xnum >= Math.pow(divisor, i)) {
        return (xnum / Math.pow(divisor, i)).toFixed(2) + suffixes[i];
      }
    }
  
    return
        
     xnum.toString();
    
  }
  export default FormatNumber;