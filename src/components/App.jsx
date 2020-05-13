import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Router, Route,Switch } from 'react-router-dom';
import { connect } from "react-redux";
import { fetchBuckets } from "../actions/fetchData";
import './App.css';
import history from '../history';
import BucketList from './BucketList';
import BucketDetails from './BucketDetails';
import CreateBucket from './CreateBucket';
import Edit from './Edit';
import Nav from './Nav';
import Footer from './Footer';

class App extends Component {
  componentDidMount() {
    this.props.fetchBuckets();
  }

  render()
  {
    const { error, loading, buckets} = this.props;
    if(error){
      return <div>Error!</div>
    }
    if(loading){
      return <div>Loading</div>
    }
    return (
      <Router history = {history}>
        <div>
          <Nav/>
          <Main/>
          <Footer/>
        </div>
      </Router>
    )
  }
}

const Main = () => (
  // <Router>
    <Switch>
      <Route exact path='/' component={BucketList} />
      <Route exact path='/bucket/:id' component={BucketDetails} />
      <Route exact path='/create' component={CreateBucket} />
      <Route exact path='/update' component={Edit} />
    </Switch>
  // </Router>
)


App.propTypes = {
  buckets: PropTypes.object,
  loading: PropTypes.object,
  error: PropTypes.object,
}

const mapStateToProps = (state) => ({
  buckets: state.buckets,
  loading: state.loading,
  error: state.error
});

const mapDispatchToProps = { fetchBuckets };

export default connect(mapStateToProps, mapDispatchToProps)(App);
