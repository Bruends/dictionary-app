export const fetchWordInfo = word => {
  // return a new function
  // that will be executed in redux thunk middleware
  return async dispatch => {
    try {
      // get the word info from api
      // and dispach the result
      dispatch({ type: 'FETCH_START' });
      const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
      const res = await fetch(url);
      // not found
      if (res.status === 404)
        return dispatch({ type: 'FETCH_ERROR', payload: 'word not found.' });

      // dispatch word info
      if (res.status === 200) {
        const [data] = await res.json();
        return dispatch({ type: 'FETCH_SUCCESS', payload: data });
      }
    } catch (error) {
      console.log(error.message);
      return dispatch({
        type: 'FETCH_ERROR',
        payload: 'error on getting word definition. :(',
      });
    }
  };
};
