import React, { PropTypes, Component } from 'react';
import SideBar from './SideBar';
import SingleVideo from './SingleVideo';

import { connect } from 'react-redux';
import getData from '../VimeoActions';

class MyVideos extends Component {

    componentDidMount() {
        this.props.dispatch(getData());
        console.log("this.props.videos", this.props.videos);
    }

    render() {

        let { videos } = this.props;

        return (

            <div>
            <div className="background"></div>
            <div className="container-fluid">
                <div className="row">
                <SideBar />
                    <div className="col-sm-9">
                    <div className="row">
                    <div className="col-sm-12 title">
                    <h1>My Videos</h1>
                </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 videos-container">
            {videos.map(data =>
            <SingleVideo key={data.resource_key} video={data}/>
)}
                         </div>
                    </div>
                    </div>
            </div>
            </div>
            </div>
                );
            }
}

MyVideos.need = [() => { return getData(); }];


function mapStateToProps(state) {
    return {
        videos: state.vimeo.videos,
    };
}

MyVideos.propTypes = {
    videos: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(MyVideos);

