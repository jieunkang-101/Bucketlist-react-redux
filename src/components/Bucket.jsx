import React from 'react'
import PropTypes from 'prop-types'

function Bucket({bucket}) {
  return (
    <div className="card z-depth-0 bucket">
      <div className="card-content grey-text text-darken-3">
        <h5 className="card-title">Title: {bucket.title}</h5>
        <p>Summary: {bucket.summary}</p>
        <p>{bucket.timestamp}</p>
        <p>{bucket.targetDate}</p>
      </div>
    </div>  
  )
}

// Bucket.propTypes = {

// }

export default Bucket

