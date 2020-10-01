import React, {useState} from 'react';
import '../App';

function Searchbar() {
    const [name, setfield] = useState({searchfield:""})

  return (
    <form id="container">
    <input type="text" id="field" placeholder="search here"value={name.searchfield} onChange={e => setfield({ ...name, searchfield: e.target.value})}/>
    <h1>{name.searchfield}</h1>

</form>
  );
}

export default Searchbar;
