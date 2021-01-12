import {
  FETCHING_CATALOG,
  FETCH_CATALOG_SUCCESS,
  FETCH_CATALOG_ERROR,
  FETCH_PHONE_DETAILS
} from '../actions/catalogTypes';

const initialState = {
  catalog: [],
  details: [],
  loading: false,
  error: null
};

export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING_CATALOG:
      return {
        ...state,
        loading: action.loading
      };
    case FETCH_CATALOG_SUCCESS:
      return {
        ...state,
        catalog: action.catalog,
        loading: false
      };
    case FETCH_CATALOG_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case FETCH_PHONE_DETAILS:
      console.log('ACTION ID', action.id);
      return {
        ...state,
        details: state.catalog.filter(phone => phone.id === action.id)
      };
    default:
      return state;
  }
}
