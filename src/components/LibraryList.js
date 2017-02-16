import React,{Component} from 'react';
import {connect} from 'react-redux';

class LibraryList extends components{
  render(){
    
  }
}

const mapStateToProps = state => {
  return {libraries: state.libraries}
};

export default connect(mapStateToProps)(LibraryList);
