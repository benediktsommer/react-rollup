import React, { useContext, createContext, useReducer } from 'react';
import { cinemaReducer, InitialCinemaState } from '../../reducer/cinemaReducer';

const AppContext = createContext({
  cinemaState: InitialCinemaState,
  cinemaDispatch: () => {
    /*do nothing*/
  },
});

export const CinemaContext = ({ children }) => {
  const [cinemaState, cinemaDispatch] = useReducer(
    cinemaReducer,
    InitialCinemaState
  );

  return (
    <AppContext.Provider value={{ cinemaState, cinemaDispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useCinemaContext = () => useContext(AppContext);
