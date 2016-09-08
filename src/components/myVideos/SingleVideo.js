import React, {PropTypes} from 'react';

const SingleVideo = ({video}) => {
    return (
        <div className="video-container">
        <a href={`${video.link}`} className="video">
        <img src={`${video.pictures.sizes[2].link}`} alt="#"/>

    {video.privacy.view == "anybody" ? "" : <img src="./img/video-mask.png" className="video-mask" alt="#"/>}

        </a>
        <p><a href={`${video.link}`}>Name</a><span> | </span>{video.name}</p>
    </div>
);
};

SingleVideo.propTypes = {
    video: PropTypes.object.isRequired
};

export default SingleVideo;
