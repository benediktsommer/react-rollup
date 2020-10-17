export const fetchSuccess = (cinemas) => ({
  type: 'SUCCESS',
  cinemas,
});

export const fetchFailed = (error) => ({
  type: 'FAILED',
  error,
});
