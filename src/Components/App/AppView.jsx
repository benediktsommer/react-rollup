import React from 'react';

import { useLoadCinema } from '../../hooks/useLoadCinema';

export const AppView = () => {
  const { isLoading } = useLoadCinema();
  console.log(isLoading);
  return <p>Test</p>;
};
