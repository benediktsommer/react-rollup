import React, { useEffect, useState } from 'react';

import { useCinemaContext } from '../Components/Context/cinemaContext';
import { fetchSuccess, fetchFailed } from '../actions/cinemaActions';
import { cinemaAdapter } from '../adapter/cinemaAdapter';

export const useLoadCinema = () => {
  const [loading, setLoading] = useState(false);
  const { cinemaState, cinemaDispatch } = useCinemaContext();

  useEffect(() => {
    const loadCinemas = async () => {
      if (!loading && cinemaState.cinemas.length === 0) {
        setLoading(true);

        cinemaAdapter()
          .then((cinemaResponse) => {
            fetchSuccess(cinemaResponse);
          })
          .catch((error) => {
            fetchFailed(error.message);
          })
          .finally(() => {
            setLoading(false);
          });
      }
    };

    loadCinemas();
  }, [cinemaState.cinemas]);

  return { isLoading: loading };
};
