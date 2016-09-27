const initialState = {
    index: 0,
};

const slider = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_SLIDE':
            return Object.assign({}, state, {
                index: action.index,
            });
        default:
            return state;
    };
};

export default slider;
