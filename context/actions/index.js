import { useContext } from "react";
import {
  GET_IS_VALID_URL,
  SET_SEARCH_INPUT,
  GET_INPUT_ERROR,
  SET_LOADING,
  SET_SELECTED_FILTER,
  SET_PAGE_NUM,
} from "../constants";
import { store } from "../";

export default function actions() {
  const { dispatch } = useContext(store);

  const setSearchInput = (input) => {
    return dispatch({
      type: SET_SEARCH_INPUT,
      payload: input,
    });
  };

  const getValidUrl = (boolean) => {
    return dispatch({
      type: GET_IS_VALID_URL,
      payload: boolean,
    });
  };

  const getInputError = (str) => {
    return dispatch({
      type: GET_INPUT_ERROR,
      payload: str,
    });
  };

  const setLoading = (boolean) => {
    return dispatch({
      type: SET_LOADING,
      payload: boolean,
    });
  };

  const setSelectedFilter = (str) => {
    return dispatch({
      type: SET_SELECTED_FILTER,
      payload: str,
    });
  };

  const setPageNumber = (num) => {
    return dispatch({
      type: SET_PAGE_NUM,
      payload: num,
    });
  };

  return {
    setSearchInput,
    getValidUrl,
    getInputError,
    setLoading,
    setSelectedFilter,
    setPageNumber,
  };
}
