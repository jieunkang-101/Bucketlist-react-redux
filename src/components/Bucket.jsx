import React from 'react'
import PropTypes from 'prop-types'

function Bucket({bucket}) {
  return (
    <div>
      <p>{bucket.title}</p>
    </div>
  )
}

Bucket.propTypes = {

}

export default Bucket

