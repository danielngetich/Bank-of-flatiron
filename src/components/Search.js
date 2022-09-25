import React, {useState} from "react";

function Search({srchfun}) {
  const [search,setSearch]=useState("")
  function changeSearching(e){
    setSearch(e.target.value)
    srchfun(search)
  }
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={changeSearching}
        value={search}/>
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
