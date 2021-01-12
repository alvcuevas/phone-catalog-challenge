import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCatalog } from '../../store/actions/catalogActions';
import PhoneListContainer from '../../components/phone-list';

const HomeView = () => {
  const dispatch = useDispatch();
  const { catalog, loading, error } = useSelector(store => store.catalog);

  useEffect(() => {
    dispatch(fetchCatalog());
  }, []);

  return (
    <>
      {loading && 'Loading phone catalog...'}
      {!!catalog.length && <PhoneListContainer list={catalog} />}
      {error && 'Error fetching catalog'}
    </>
  );
};

export default HomeView;
