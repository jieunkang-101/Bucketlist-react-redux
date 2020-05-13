import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Router, Route, NavLink, Switch } from 'react-router-dom';
import { connect } from "react-redux";
import { fetchMovies } from "../actions/fetchData";
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchBuckets();
  }

  render()
  {
    console.log(this.props.buckets);
    const { error, loading } = this.props;
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
