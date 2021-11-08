
import { ApplicationAction } from "./actions"
import { Language } from "./interfaces";
import { Coin } from "./interfaces";

import en_US from "../assets/lang/en_US.json";
import ru_RU from "../assets/lang/ru_RU.json";
import fi_FIN from "../assets/lang/fi_FIN.json";
import de_DE from "../assets/lang/de_DE.json";
import geo_Geo from "../assets/lang/geo_Geo.json";
import fre_FRE from "../assets/lang/fre_FRE.json";

const enUS = en_US;
const ruRU = ru_RU;
const fiFIN = fi_FIN;
const deDE = de_DE;
const geoGeo = geo_Geo;
const freFRE = fre_FRE;

export interface ApplicatonState {
  settings_open: boolean;
  language: Language;
  coins: Coin[];
}

const initialState = {
  settings_open: false,
  language: enUS,
  coins: []
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
        language: eval(action.payload),
      }
    
    case "SET_COINS":
      return {
        ...state,
        coins: action.payload,
      }

    default:
      return state;
  }
}
