import {createSlice} from "@reduxjs/toolkit";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {getCharacters} from "../services/characters";

export const initialState = {
	showLoader: false,
	dataCharacter: null,
	textMessageError: "",
	page: 1,
	totalPages: 0,
	labelName: "",
	selectStatus: "all",
};

export const getCharactersActions = createAsyncThunk("fetch/characters", async (arg, {getState}) => {
	const state = getState();
	const data = await getCharacters(state.character.page, state.character.selectStatus, state.character.labelName);
	return data;
});

export const characterTask = createSlice({
	name: "character",
	initialState,
	reducers: {
		setPageAction(state, action) {
			state.page = action.payload;
		},
		setLabelName(state, action) {
			state.labelName = action.payload;
		},
		setSelectStatus(state, action) {
			state.selectStatus = action.payload;
		},
	},
	extraReducers: function (builder) {
		builder.addCase(getCharactersActions.pending, (state) => {
			state.dataCharacter = [];
			state.showLoader = true;
		});
		builder.addCase(getCharactersActions.fulfilled, (state, action) => {
			state.dataCharacter = action.payload.results;
			state.showLoader = false;
			state.totalPages = action.payload.info.pages;
		});
		builder.addCase(getCharactersActions.rejected, (state) => {
			state.dataCharacter = [];
			state.showLoader = false;
			state.textMessageError = "Error en el servicio";
		});
	},
});

export const {setPageAction, setLabelName, setSelectStatus} = characterTask.actions;

export default characterTask.reducer;
