export type ApplicationAction = 
    | {type: "TOGGLE_SETTINGS"}


export const toggleSettings = () : ApplicationAction => ({
    type: "TOGGLE_SETTINGS",
});