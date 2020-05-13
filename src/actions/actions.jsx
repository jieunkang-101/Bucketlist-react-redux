export const FETCH_DATA_BEGIN = 'FETCH_DATA_BEGIN';
export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

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