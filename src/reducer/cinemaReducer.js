export const InitialCinemaState = {
  cinemas: [],
  error: null,
};

export const cinemaReducer = (state, action) => {
  switch (action.type) {
    case 'SUCCESS': {
      return {
        ...state,
        cinemas: action.cinemas,
      };
    }

    case 'FAILED': {
      return {
        ...state,
        cinemas: [],
        error: action.error,
      };
    }

    default: {
      return state;
    }
  }
};
