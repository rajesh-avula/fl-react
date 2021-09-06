import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';

function Search(props) {
    const [searchValue,setSearchValue] = useState("");
    return (
        <div style={{ display: "flex",marginTop: "1rem"}}>
        <TextField id="outlined-basic" variant="outlined" onChange={(e) => setSearchValue(e.target.value)} type="search"/>
        <Button variant="outlined" onClick={() => props.searchHandler(searchValue)} style={{"marginLeft" : "1em"}}>SEARCH</Button>
        </div>
    );
}

export default Search;