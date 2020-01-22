import * as ActionTypes from '_actions-types';
import {
    GET_BOOK_LIST,
} from '_endpoints';
import {
    callGetApi,
} from '_utils';

export const getBookListError = () => ({
    type: ActionTypes.GET_BOOK_LIST_ERROR,
});

export const getBookListRequest = () => ({
    type: ActionTypes.GET_BOOK_LIST_REQUEST,
});

export const getBookListSuccess = (data: Array<*>) => ({
    type: ActionTypes.GET_BOOK_LIST_SUCCESS,
    data,
});

export const getBookList = () => {
    callGetApi(GET_BOOK_LIST).then((data) => {
        console.log('response data: '+JSON.stringify(data));
    })
};
