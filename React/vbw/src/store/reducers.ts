
import { ApplicationAction } from "./actions"
import { Language } from "./interfaces";
import { Coin } from "./interfaces";

import en_US from "../assets/lang/en_US.json";
import ru_RU from "../assets/lang/ru_RU.json";
import fi_FIN from "../assets/lang/fi_FIN.json";
import de_DE from "../assets/lang/de_DE.json";
import geo_GEO from "../assets/lang/geo_GEO.json";
import fre_FRE from "../assets/lang/fre_FRE.json";
import sp_SP from "../assets/lang/sp_SP.json";

// eslint-disable-next-line
const enUS = en_US;
// eslint-disable-next-line
const ruRU = ru_RU;
// eslint-disable-next-line
const fiFIN = fi_FIN;
// eslint-disable-next-line
const deDE = de_DE;
// eslint-disable-next-line
const geoGEO = geo_GEO;
// eslint-disable-next-line
const freFRE = fre_FRE;
// eslint-disable-next-line
const spSP = sp_SP;

export interface ApplicatonState {
  settings_open: boolean;
  language: any;
  coins: Coin[];
  ukMAP: string;
}

const initialState = {
  settings_open: false,
  language: enUS,
  coins: [{
    coin: "Bitcoin",
    network_hashrate: 0,
    algorithm: "SHA-256",
    ratedPower: 0
  }],
  ukMAP: "<h1>Loading...</h1>",
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
        // eslint-disable-next-line
        language: eval(action.payload),
      }
    
    case "SET_COINS":
      return {
        ...state,
        coins: action.payload,
      }

    case "UPDATE_UKMAP":
      return {
        ...state,
        ukMAP: action.payload,
      } 

    default:
      return state;
  }
}
