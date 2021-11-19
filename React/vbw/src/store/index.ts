import { TypedUseSelectorHook, useSelector } from "react-redux";
import { combineReducers } from "redux";
import { reducers } from './reducers';


export const rootReducer = combineReducers({
   reducers: reducers,
  });

export type RootState = ReturnType<typeof rootReducer>;


export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default rootReducer;