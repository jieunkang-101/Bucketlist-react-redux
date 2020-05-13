import * as actions from '../actions/actions'; 

const initialState = {
  loading: false,
  error: null,
  buckets: []
}

function reducer(state = initialState, action){
  //const buckets = [...state.buckets];
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
        buckets: action.buckets.data
      };
    case actions.FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.playload.error,
      }
    case actions.CREATE_BUCKET:
      return {
        ...state,
      }
    case actions.DELETE_BUCKET:
      return {
        ...state,
      }    
    default:
      return state; 

}
}

export default reducer;

