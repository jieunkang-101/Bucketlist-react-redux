export const FETCH_DATA_BEGIN = 'FETCH_DATA_BEGIN';
export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const CREATE_BUCKET = 'CREATE_BUCKET';
export const UPDATE_BUCKET = 'UPDATE_BUCKET';
export const DELETE_BUCKET = 'DELETE_BUCKET';
export const POST_DATA = 'POST_DATA';
export const POST_DATA_FAILURE = 'POST_DATA_FAILURE';

export const fetchDataBegin = () => ({
  type: FETCH_DATA_BEGIN
})

export const fetchData = (buckets) => ({
  type: FETCH_DATA,
  buckets
})

export const fetchDataFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  error
})

export const PostData = (buckets) => ({
  type: POST_DATA,
  buckets
})

export const PostDataFailure = (error) => ({
  type: POST_DATA_FAILURE,
  error
})