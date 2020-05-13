import React, {Component} from 'react';
import { connect } from 'react-redux';
import Moment from 'moment';
import axios from "axios";
// import { createBucket } from '../actions/bucketActions';

class Form extends Component {
  state = { title: '', summary: '', timestamp: new Moment().fromNow(true), targetDate: ''}

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
    
  handleSubmit = (e) => {
    e.preventDefault();
    this.createBucket(this.state);
    const bucket = this.state;
  }

  
  createBucket = async (bucket) => {
    axios.post('https://bucketlist-api.azurewebsites.net/api/CreateBucket', JSON.stringify(bucket));
    // await fetch('https://bucketlist-api.azurewebsites.net/api/CreateBucket', {
    //   method: 'POST',
    //   mode: 'cors',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //     body: JSON.stringify(bucket),
    // })
    // .then(
    //   response => response.json() // .json() is a promise function
    // )
  // if (json.ok){
  //   const resp = await response.json();
  //   console.log(resp);
  // }
  //     .then(res => res.json())
  //     .then(response => console.log('Success: ', response))
  // .catch(error => console.error('Error: ', error))

    // this.props.fetchBuckets()
  }


  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input className="form-control" type="text" name="title" placeholder="Title" id="title" onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label>Summary</label>
            <textarea className="form-control" type="text" name="summary" placeholder="Summary" id="summary" onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <label>Target Data</label>
            <input className="form-contorl" type="text" name="targetData" placeholder="Target Date" id="targetDate" onChange={this.handleChange}/>
          </div>
          <button className="waves-effect waves-light btn" type="submit">Create</button>
        </form>
      </div>
    )
  }
}

// const mapDispatchToProps = (dispatch) => ({
//   createBucket: (bucket) => dispatch(createBucket(bucket))
// })

// export default connect (null, mapDispatchToProps)(Form);
export default Form


