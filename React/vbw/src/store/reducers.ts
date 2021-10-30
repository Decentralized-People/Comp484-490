
import { ApplicationAction } from "./actions";

export interface ApplicatonState {
  settings_open: boolean;
}

const initialState = {
  settings_open: false,
}

export const reducers = (state: ApplicatonState = initialState, action: ApplicationAction) => {
  switch (action.type) {
    case "TOGGLE_SETTINGS":
      return {
        ...state,
        settings_open: !state.settings_open,
      };

    default:
      return state;
  }
}
