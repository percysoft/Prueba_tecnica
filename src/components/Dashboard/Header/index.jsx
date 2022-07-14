import React, {useState} from "react";
import TextField from "@mui/material/TextField";
import "./index.css";
import {SelectComponent} from "../../DesignSystem/select";
import {useDispatch, useSelector} from "react-redux";
import {setSelectStatus, setLabelName} from "../../../store/characterTask";

const dataSelect = [
	{
		label: "All",
		value: "all",
	},
	{
		label: "Alive",
		value: "alive",
	},
	{
		label: "Dead",
		value: "dead",
	},
	{
		label: "Unknown",
		value: "unknown",
	},
];
export const Header = ({disabled}) => {
	const dispatch = useDispatch();
	const {selectStatus, labelName} = useSelector((state) => state.character);

	return (
		<>
			<div className="header">
				<a className="logo">Rick and Morty</a>
				<div className="header-right">
					<TextField
						className="header-right-item"
						label="Name"
						variant="outlined"
						disabled={disabled}
						value={labelName}
						onChange={(e) => dispatch(setLabelName(e.target.value))}
					/>
					<SelectComponent disabled={disabled} data={dataSelect} changeSelect={(value) => dispatch(setSelectStatus(value))} valueSelect={selectStatus} />
				</div>
			</div>
		</>
	);
};
