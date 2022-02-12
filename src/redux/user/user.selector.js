import { createSelector } from "reselect";

const selectuser = state => state.user;

export const selectCurrentUser = createSelector(
    [selectuser],
    user => user.currentuser
);

