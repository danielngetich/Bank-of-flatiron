import React ,{useState} from "react";

function AddTransactionForm({pstdata}) {
  const [addData,setAddData]=useState({date:"",description:"",category:"",amount:0})
  function collectData(e){
e.preventDefault()
   pstdata(addData)
  }
  function monitorChange(e){
    setAddData({...addData,[e.target.name]:e.target.value})
  }
  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={collectData} onChange={monitorChange}>
        <div className="inline fields">
          <input type="date" name="date" defaultValue={addData.date}/>
          <input type="text" name="description" placeholder="Description" defaultValue={addData.description} />
          <input type="text" name="category" placeholder="Category" defaultValue={addData.category}/>
          <input type="number" name="amount" placeholder="Amount" step="0.01" defaultValue={addData.amount} />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
