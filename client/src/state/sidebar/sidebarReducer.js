let initial_state = false;

const sideBarReducer = (state = initial_state, action) => {
    switch (action.type) {
        case "TOGGLE":
            return !state;
        default:
            return state;
    }
};
export default sideBarReducer;
