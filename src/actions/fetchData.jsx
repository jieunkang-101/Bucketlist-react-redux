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

export function createBucket(bucket) {
  return dispatch => {
    axios.post('https://bucketlist-api.azurewebsites.net/api/CreateBucket', 
    JSON.stringify(bucket))
    .then(() => {dispatch({ type: actions.CREATE_BUCKET, bucket });
    })
    .catch(error => {dispatch(actions.PostDataFailure(error))
    })
  }
}

export function deleteBucket(id) {
  return dispatch => {
    axios.delete("https://bucketlist-api.azurewebsites.net/api/DeleteBucket")
    .then(() => {dispatch({ type: actions.DELETE_BUCKET });
    })
    .catch(error => {dispatch(actions.DeleteDataFailure(error))
    })
  }
}