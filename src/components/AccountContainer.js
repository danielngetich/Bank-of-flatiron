import React ,{useEffect, useState}  from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const[transactions, setTransactions]=useState([])
    console.log(transactions)
    useEffect(()=>{
      fetch("http://localhost:8001/transactions")
      .then(response=>response.json())
      .then((transactionData)=>{setTransactions(transactionData)})
    },[])

   function postData(transact){
    fetch("http://localhost:8001/transactions",{
      method:"POST",
      headers:{
          "Content-Type": "application/json"
      },
       body:JSON.stringify(transact)
    })
    .then(response=>response.json())
    .then((data)=>{
      setTransactions((transactions)=>[...transactions,data])
    })
   }

   function searchingFun(search){
   const filtereTransactions= transactions.filter((searchData)=>searchData.description.includes(search))
   console.log(filtereTransactions)
   setTransactions(filtereTransactions)
   }
  
  return (
    <div>
      <Search srchfun={searchingFun}/>
      <AddTransactionForm pstdata={postData} />
      <TransactionsList transactions={transactions} />
    </div>
  );
}

export default AccountContainer;
