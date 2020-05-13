import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { deleteBucket } from "../actions/fetchData";


function BucketDetails(props) {
  const { bucket, deleteBucket }  = props;
  console.log(bucket);

  return (
    <div>
      <h3>Details</h3>
      <p>{bucket.title}</p>
      <p>{bucket.summary}</p>
      <button onClick={deleteBucket} className='btn pink lighten-1 z-depth-0'>Delete Bucket</button>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const buckets = state.buckets;
  const selectedBucket = buckets  ? buckets[id] : null;
  return {
    bucket : selectedBucket,
  }
}

// const mapDispatchToProps = (dispatch, ownProps) => {
//   const id = ownProps.match.params.id;
//   console.log(id);
//   return {
//     deleteBucket: () => dispatch(deleteBucket)
//   }
// }

const mapDispatchToProps = (dispatch, ownProps) => {
  const id = ownProps.match.params.id;
  console.log(id);
  return {
    deleteBucket: () => dispatch(deleteBucket(id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(BucketDetails);
