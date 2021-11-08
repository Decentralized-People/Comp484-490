import { Coin } from "./interfaces";

export type ApplicationAction = 
    | {type: "TOGGLE_SETTINGS"}
    | {type: "SWITCH_LANGUAGE", payload: string}
    | {type: "SET_COINS", payload: Coin[]}


export const toggleSettings = () : ApplicationAction => ({
    type: "TOGGLE_SETTINGS",
});

export const switchLanguage = (language: string) : ApplicationAction => ({
    type: "SWITCH_LANGUAGE",
    payload: language,
});

export const setCoins = (coins: Coin[]) : ApplicationAction => ({
    type: "SET_COINS",
    payload: coins,
});
