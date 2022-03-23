import { Pagination, Stack } from "@mui/material";
import React, { useState } from "react";

const PaginationMUI = ({ nextPage, goToNextPage, currentPageFromHome }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const setPage = (event, val) => {
    setCurrentPage(val);
    if (val > currentPage) {
      goToNextPage(val);
    } else if (val < currentPage) {
      goToNextPage(val);
    }
  };

  return (
    <Stack spacing={2}>
      <Pagination
        style={{
          padding: "20px",
          display: "flex",
          justifyContent: "center",
        }}
        count={45}
        page={currentPageFromHome}
        shape="rounded"
        onChange={(event, val) => setPage(event, val)}
      />
    </Stack>
  );
};

export default PaginationMUI;
