import React, {Component, PropTypes} from 'react';
import SingleVideo from './SingleVideo';



class MyVideos extends Component {
    render() {

        let { videos } = this.props

        return (

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

                );
            }
}


MyVideos.propTypes = {
    videos: PropTypes.array.isRequired
};

export default MyVideos;
