import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Bucket from './Bucket';
import { Link } from 'react-router-dom';

function BucketList(props) {
  console.log(props);
  return (
    <div>
      <h1>Bucket List</h1>
      {/* if buckets is empty, there will be no error if declared 'props.buckets &&' */}
      {props.buckets && props.buckets.map(bucket => {
        return (
          <Link to={'/bucket/' + bucket._id} key={bucket._id} >
            <Bucket bucket={bucket} />
          </Link>
        )
      })}
    </div>
  )
}

const mapStateToProps = (state) => ({
  buckets: state.buckets,
})

export default connect(mapStateToProps)(BucketList);