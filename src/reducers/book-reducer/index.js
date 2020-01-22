import * as ActionTypes from '_action-types';
export const initialStateBook = {
    loading: false,
    error: false,
    data: undefined
};

export const bookReducer = (state: *, action: *) => {
    switch (action.type) {
        case ActionTypes.GET_BOOK_LIST_ERROR:
            return { ...state, loading: false, error: true };
        case ActionTypes.GET_BOOK_LIST_REQUEST:
            return { ...state, loading: true, error: false };
        case ActionTypes.GET_BOOK_LIST_SUCCESS:
            return { ...state, loading: false, data: action.data, error: false };
        default:
            return state;
    }
};