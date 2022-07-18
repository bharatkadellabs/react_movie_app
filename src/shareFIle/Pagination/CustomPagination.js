import React from "react";
// import Pagination from '@mui/material/Pagination';
// import Pagination from "@material-ui/lab/Pagination";
// import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { Pagination } from "@mui/material";

const CustomPagination = (setPage, numOfPages = 10) => {
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };
  return (
    <div>
      <Pagination
        onChange={(e) => handlePageChange(e.target.textContent)}
        count={numOfPages}
        color="secondary"
      />
    </div>
  );
};

export default CustomPagination;
