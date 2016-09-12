//import fetchVideo from '../../util/fetchVideo';
import fetchIsomorphic from 'isomorphic-fetch';

// Export Constants
export const GET_DATA = 'GET_DATA';



export function addData(videos) {
    return {
        type: GET_DATA,
        videos,
    };
}

function getVideos() {
    return fetch('https://api.vimeo.com/videos?query=workouts&access_token=fe948072bce7119dd30809a4d39ce2ff')
        .then(response => response.json().then(json => ({ json, response })))
        .then(({ json, response }) => {
            if (!response.ok) {
                return Promise.reject(json);
            }

            return json;
        })
        .then(
        response => response,
        error => error
    );
}

function callApi2(endpoint, method = 'get', body) {

    return fetchIsomorphic(`http://localhost:8000/${endpoint}`, {
        headers: { 'content-type': 'application/json' },
        method,
        body: JSON.stringify(body),
    })
        .then(response => response.json().then(json => ({ json, response })))
        .then(({ json, response }) => {
            if (!response.ok) {
                 return Promise.reject(json);
            }

            return json;
        })
        .then(
        response => response,
        error => error
    );
}

export default function getData() {
    return (dispatch) => {

        return getVideos()
            .then(res => getVideos())
            .then(res => dispatch(addData(res.data)));
    };
}






