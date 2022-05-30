import React, { useState, forwardRef, useImperativeHandle } from "react";

//this doesn't work yet


const getRunningTotal = (params) => {
    const { id, credit_amount, debit_amount, estimate } = params?.data;
    let result;
    if (estimate) {
      result = "Estimate";
    }


    const filteredRow = rowData.filter((row) => row.estimate !== true);

    filteredRow.map((row, index) => {
      if (row.id === id) {
        if (index === 0) {
          result = credit_amount - debit_amount;
        } else {
          // first Running total
          // Cal second running total
          // cal 3rd running total
          const allRunningTotalNode = document.querySelectorAll(
            '[col-id="running_total"]'
          );

          const allRunningTotalArr = Array.from(allRunningTotalNode);
          allRunningTotalArr.shift();

          const filteredRunningTotal = allRunningTotalArr.filter(
            (runningTotal) => runningTotal.innerHTML !== "Estimate"
          );
          const prevRunningTotal =
            index === 0 ? credit_amount - debit_amount : filteredRunningTotal[index - 1];

          const prevTot = prevRunningTotal.innerHTML.replace(/[^0-9.-]+/g,"")



          const total =
              Number(prevTot) +
              Number(params.data.credit_amount) -
              Number(params.data.debit_amount);
          console.log("Prevtot",prevTot.replace(/[^0-9.-]+/g,""))
          result = total;
        }
      }
    });

    return result;
  };

export default getRunningTotal