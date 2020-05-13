import * as actions from '../actions/actions'; 

const initialState = {
  loading: false,
  error: null,
  buckets: []
}

function reducer(state = initialState, action){
  switch(action.type){
    case actions.FETCH_DATA_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case actions.FETCH_DATA:
      return {
        ...state,
        loading: false,
        buckets: action.
      };

      
    case actions.FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.playload.error,
      }
}
}

export default reducer;

