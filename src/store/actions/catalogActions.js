import axios from 'axios';
import {
  FETCHING_CATALOG,
  FETCH_CATALOG_SUCCESS,
  FETCH_CATALOG_ERROR,
  FETCH_PHONE_DETAILS
} from './catalogTypes';

export const fetchCatalog = () => dispatch => {
  dispatch(fetchingCatalog(true));

  axios
    .get(process.env.REACT_APP_CATALOG_API)
    .then(res => {
      if (res.data?.phones) {
        dispatch(fetchCatalogSuccess(res.data.phones));
        dispatch(fetchingCatalog(false));
      }
    })
    .catch(err => dispatch(fetchCatalogError(err)));
};

export const fetchingCatalog = loading => ({
  type: FETCHING_CATALOG,
  loading
});

export const fetchCatalogSuccess = catalog => ({
  type: FETCH_CATALOG_SUCCESS,
  catalog
});

export const fetchCatalogError = error => ({
  type: FETCH_CATALOG_ERROR,
  error
});

export const fetchPhoneDetails = id => ({
  type: FETCH_PHONE_DETAILS,
  id
});
