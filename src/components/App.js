import React, {PropTypes} from 'react';
import SideBar from './sidebar/SideBar';
import MyVideos from './myVideos/MyVideos';
import {connect} from 'react-redux';

class App extends React.Component {

  render() {
    return (

        <div>
          <div className="background"></div>
          <div className="container-fluid">
              <div className="row">
              <SideBar  user={this.props.user} />
              <MyVideos  videos={this.props.videos} />
              </div>
          </div>
        </div>

    );
  }
}

App.propTypes = {
  user: PropTypes.object.isRequired,
    videos: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
      user: state.userReducer,
      videos: state.videosReducer
  };
}

export default connect(mapStateToProps)(App);
