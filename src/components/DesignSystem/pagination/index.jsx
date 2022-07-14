import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "./index.css";

export const PaginationComponent = ({page, totalPages, changePage}) => {
	const changePagination = (event, value) => {
		changePage(value);
	};
	return (
		<div className="container-pagination">
			<Stack spacing={4}>
				<Pagination count={totalPages} variant="outlined" shape="rounded" page={page} onChange={changePagination} />
			</Stack>
		</div>
	);
};
