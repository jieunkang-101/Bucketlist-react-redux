import axios from "axios";
import * as actions from "./actions";

export function fetchBuckets() {
  return dispatch => {
    dispatch(actions.fetchDataBegin());
    axios.get("https://bucketlist-api.azurewebsites.net/api/GetBuckets?code=06wfN5IvYeEF6xdZGTWLTL1jqNDYlaro/RbSGOe9shoO1ahaX38oGg==")
    .then(response => {dispatch(actions.fetchData(response));
    })
    .catch(error => {dispatch(actions.fetchDataFailure(error))
    })
  }
}


// const makeRequest = () =>
//   axios.get(`https://bucketlist-api.azurewebsites.net/api/GetBuckets?code=06wfN5IvYeEF6xdZGTWLTL1jqNDYlaro/RbSGOe9shoO1ahaX38oGg==`);


// const getRequest = async () => {
//   try {
//     const {
//       data: { results },
//       data
//     } = await makeRequest();
//     return [results || data, null];
//   } catch (e) {
//     console.log(e);
//     return [null, e];
//   }
// };  

// export const parksApi = {
//   getParks: () => getRequest()
// }