export const fetchWordInfo = (word) => {
    return async (dispatch) => {
        try {
            dispatch({ type: 'FETCH_START' });
            const url  = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
            const res  = await fetch(url);
            const [data] = await res.json();
            dispatch({ type: 'FETCH_SUCCESS', payload: data });
        } catch(error){
            dispatch({ type: 'FETCH_ERROR', payload: error });
        }
    }
}