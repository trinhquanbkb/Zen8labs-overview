import { combineReducers } from "redux";

import Auth from "./auth/reducers";
import { api } from "../api";

export default combineReducers({
	Auth,
	[api.reducerPath]: api.reducer,
});
