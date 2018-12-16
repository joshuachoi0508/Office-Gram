import { connect } from 'react-redux';
import React from 'react';
import Profile from './profile';
import { fetchImages } from '../../actions/image_actions';

const mapStateToProps = (state, ownProps) => {
  const user = state.entities.users[state.session.id];
  const images = Object.values(state.entities.images);

  return ({
    user: user,
    images: images
  })
}

const mapDispatchToProps = dispatch => {
  return ({
    fetchImages: () => dispatch(fetchImages())
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
