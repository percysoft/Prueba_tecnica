import {configureStore} from "@reduxjs/toolkit";
import characterReducer from "./characterTask";

export const store = configureStore({
	reducer: {
		character: characterReducer,
	},
});
