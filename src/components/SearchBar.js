import React, { useState } from "react";
import { Paper, TextField } from "@material-ui/core";

const SearchBar = (props) => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => setSearch(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onFormSubmit(search);
  };

  return (
    <Paper elevation={6} style={{ padding: "25px" }}>
      <form onSubmit={handleSubmit}>
        <TextField fullWidth label="Search..." onChange={handleChange} />
      </form>
    </Paper>
  );
};

export default SearchBar;
