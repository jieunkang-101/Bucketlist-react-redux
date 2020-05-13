import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

function BucketDetails(props) {
  const { bucket }  = props;
  console.log(bucket);

  return (
    <div>
      <h3>Details</h3>
      <p>{bucket.title}</p>
      <p>{bucket.summary}</p>
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

export default connect(mapStateToProps)(BucketDetails);
