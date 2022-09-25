import React from "react";
import Transaction from "./Transaction";

function TransactionsList({transactions}) {
const trans=transactions.map((data)=>{
  return (<Transaction 
    key={data.id}
date={data.date}
description={data.description}
category={data.category}
amount={data.amount}
/>
)})
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {trans}
      </tbody>
    </table>
  );
}

export default TransactionsList;
