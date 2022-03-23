import { Autocomplete, TextField } from "@mui/material";
import { memo } from "react";

const SearchBox = memo(({ handleSearch }) => {
  return (
    <Autocomplete
      style={{ margin: "50px 0px" }}
      options={[]}
      freeSolo
      disableClearable
      renderInput={(params) => (
        <TextField
          {...params}
          label="Find A Single Pokemon"
          InputProps={{
            ...params.InputProps,
            type: "search",
          }}
          onChange={(e) => handleSearch(e)}
        />
      )}
    />
  );
});

export default SearchBox;
