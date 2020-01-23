import * as ActionTypes from '_action-types';
import {GET_BOOK_LIST} from '_endpoints';
import {callGetApi} from '_utils';

export const getBookListError = () => ({
  type: ActionTypes.GET_BOOK_LIST_ERROR,
});

export const getBookListRequest = () => ({
  type: ActionTypes.GET_BOOK_LIST_REQUEST,
});

export const getBookListSuccess = data => ({
  type: ActionTypes.GET_BOOK_LIST_SUCCESS,
  data,
});

export const getBookList = dispatch => {
  dispatch(getBookListRequest());
  callGetApi(GET_BOOK_LIST)
    .then(data => {
      dispatch(getBookListSuccess(data.results.books));
    })
    .catch(() => dispatch(getBookListError()));
};
