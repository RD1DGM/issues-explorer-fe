import {
  SET_SEARCH_INPUT,
  GET_IS_VALID_URL,
  GET_INPUT_ERROR,
  SET_LOADING,
  SET_SELECTED_FILTER,
  SET_PAGE_NUM,
} from "../constants";

export const initialState = {
  searchInput: "",
  isValidUrl: false,
  hasInputError: "",
  isLoading: false,
  selectedFilter: "All Issues",
  pageNum: 0,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_SEARCH_INPUT:
      return { ...state, searchInput: action.payload };
    case GET_IS_VALID_URL:
      return { ...state, isValidUrl: action.payload };
    case GET_INPUT_ERROR:
      return { ...state, hasInputError: action.payload };
    case SET_LOADING:
      return { ...state, isLoading: action.payload };
    case SET_SELECTED_FILTER:
      return { ...state, selectedFilter: action.payload };
    case SET_PAGE_NUM:
      return { ...state, pageNum: action.payload };
    default:
      return state;
  }
};
