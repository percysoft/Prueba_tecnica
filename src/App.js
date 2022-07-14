import React, {useEffect} from "react";
import "./App.css";
import {Home} from "./pages/home";
import {CircularProgressWithLabel} from "./components/DesignSystem/loading";
import {useSelector, useDispatch} from "react-redux";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Header} from "./components/Dashboard/Header";
import {Footer} from "./components/Dashboard/Footer";
import {getCharactersActions} from "./store/characterTask";

function App() {
	const dispatch = useDispatch();
	const {showLoader, page, selectStatus, labelName} = useSelector((state) => state.character);

	useEffect(() => {
		const promise = dispatch(getCharactersActions());
		return () => {
			promise.abort();
		};
	}, [page, selectStatus, labelName]);

	return (
		<div className="App">
			<Header disabled={showLoader} />
			{showLoader ? (
				<CircularProgressWithLabel />
			) : (
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Home />} />
					</Routes>
				</BrowserRouter>
			)}

			<Footer />
		</div>
	);
}

export default App;
