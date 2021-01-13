import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPhoneDetails } from '../../store/actions/catalogActions';
import PhoneDetail from '../../components/phone-detail';

const DetailView = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { details } = useSelector(store => store.catalog);

  useEffect(() => {
    const id = Number(params.id);
    dispatch(fetchPhoneDetails(id));
  }, []);

  return <>{!!details.length && <PhoneDetail phone={details[0]} />}</>;
};

export default DetailView;
