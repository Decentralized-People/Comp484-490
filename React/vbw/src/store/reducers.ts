
import { ApplicationAction } from "./actions";

export interface ApplicatonState {
  settings_open: boolean;
  language: string;
}

const initialState = {
  settings_open: false,
  language: "en-US"
}

export const reducers = (state: ApplicatonState = initialState, action: ApplicationAction) => {
  switch (action.type) {
    case "TOGGLE_SETTINGS":
      return {
        ...state,
        settings_open: !state.settings_open,
      };
    
    case "SWITCH_LANGUAGE":
      return {
        ...state,
        language: action.payload,
      }

    default:
      return state;
  }
}
