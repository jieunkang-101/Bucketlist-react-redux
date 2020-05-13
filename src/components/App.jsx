import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Router, Route, NavLink, Switch } from 'react-router-dom';
import { connect } from "react-redux";
import { fetchBuckets } from "../actions/fetchData";
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchBuckets();
  }

  render()
  {
    // console.log(this.props.buckets);
    const { error, loading, buckets} = this.props;
    if(error){
      return <div>Error!</div>
    }
    if(loading){
      return <div>Loading</div>
    }
    return (
      <div>
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  buckets: state.buckets,
  loading: state.loading,
  error: state.error
});

const mapDispatchToProps = { fetchBuckets };

export default connect(mapStateToProps, mapDispatchToProps)(App);

// class App extends Component {
//   constructor(props) {
//     super(props);
//   }


//   componentDidMount() {
//     console.log(this.props);
//     const { dispatch } = this.props;
//     dispatch(fetchBuckets());
//   }
  
//   render() {
//     return (
//       <div>
//       <h1>Bucket List</h1>
//       </div>
//     )

//   }
// } 

// const mapStateToProps = (state) => ({
//   buckets: state.buckets,
//   loading: state.loading,
//   error: state.error
// });

// export default App