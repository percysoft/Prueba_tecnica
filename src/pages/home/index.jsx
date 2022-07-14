import React from "react";
import {PaginationComponent} from "../../components/DesignSystem/pagination";
import {useDispatch, useSelector} from "react-redux";
import {setPageAction} from "../../store/characterTask";
import {CharacterList} from "../../components/Dashboard/character-list/index.jsx";
import "./index.css";

export const Home = () => {
	const dispatch = useDispatch();

	const {dataCharacter, page, totalPages} = useSelector((state) => state.character);

	return (
		<div className="container">
			<PaginationComponent totalPages={totalPages} page={page} changePage={(value) => dispatch(setPageAction(value))} />
			<CharacterList dataCharacter={dataCharacter} />
			<PaginationComponent totalPages={totalPages} page={page} changePage={(value) => dispatch(setPageAction(value))} />
		</div>
	);
};
