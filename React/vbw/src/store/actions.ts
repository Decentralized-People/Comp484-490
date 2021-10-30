export type ApplicationAction = 
    | {type: "TOGGLE_SETTINGS"}
    | {type: "SWITCH_LANGUAGE", payload: string}


export const toggleSettings = () : ApplicationAction => ({
    type: "TOGGLE_SETTINGS",
});

export const switchLanguage = (language: string) : ApplicationAction => ({
    type: "SWITCH_LANGUAGE",
    payload: language,
});
