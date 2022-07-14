import React, {useState} from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

export const SelectComponent = ({disabled, data, changeSelect, valueSelect}) => {
	const handleChange = (event) => {
		changeSelect(event.target.value);
	};

	return (
		<FormControl className="header-right-item">
			<InputLabel className="container-item">Status</InputLabel>
			<Select className="container-item" value={valueSelect} label="Statis" onChange={handleChange} disabled={disabled}>
				{data &&
					data.map((item, index) => {
						return (
							<MenuItem key={index} value={item.value}>
								{item.label}
							</MenuItem>
						);
					})}
			</Select>
		</FormControl>
	);
};
