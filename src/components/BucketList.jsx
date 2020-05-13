import React from 'react'
import { connect } from 'react-redux';
import Bucket from './Bucket';
import { Link } from 'react-router-dom';

function BucketList(props) {
  console.log(props);
  return (
    <div className="review-list section">
      <h3>Bucket List</h3>
      {/* if buckets is empty, there will be no error if declared 'props.buckets &&' */}
      {props.buckets && props.buckets.map(bucket => {
        return (
          <Link to={'/bucket/' + bucket.id} key={bucket._id} >
            <Bucket bucket={bucket} />
          </Link>
        )
      })}
    </div>
  )
}

const mapStateToProps = (state) => ({
  buckets: state.buckets
})

export default connect(mapStateToProps)(BucketList);