import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCatalog } from '../../store/actions/catalogActions';
import PhoneListContainer from '../../components/phone-list';
import Spinner from '../../components/spinner';
import ErrorAlert from '../../components/error-alert'

const HomeView = () => {
  const dispatch = useDispatch();
  const { catalog, loading, error } = useSelector(store => store.catalog);

  useEffect(() => {
    if (!catalog.length) {
      dispatch(fetchCatalog());
    }
  }, [catalog]);

  const renderPhones = () => <PhoneListContainer list={catalog} />
  const renderLoading = () => <Spinner />
  const renderError = () => <ErrorAlert />

  return (
    <>
      {loading && renderLoading()}
      {!!catalog.length && renderPhones()}
      {error && renderError()}
    </>
  );
};

export default HomeView;
