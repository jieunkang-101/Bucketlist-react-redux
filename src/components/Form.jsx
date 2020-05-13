import React, {Component} from 'react';
import { connect } from 'react-redux';
import Moment from 'moment';
import Button from '@material-ui/core/Button';
import { createBucket } from '../../actions/bucketActions';

class Form extends Component {
  state = { id: '', title: '', summary: '', timestamp: new Moment().fromNow(true), targetDate: ''}

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createBucket(this.state);
    this.props.history.push('/');
  }
  
  render() {
    return 
    (
      <div>
        <Form onSubmit={this.handleSubmit}>
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
            <input className="form-contorl" type="text" name="targetData" placeholder="Target Date" onChange={this.handleChange}/>
          </div>
          <Button type="submit">Create</Button>
        </Form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  createBucket: (bucket) => dispatch(createBucket(bucket))
})

export default connect (null, mapDispatchToProps)(Form);
