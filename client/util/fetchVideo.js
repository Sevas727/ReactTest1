export default function fetchVideo(body) {


    return fetch('https://localhost:8000/posts/videos/', {
        headers: { 'content-type': 'application/json' },
        method: "GET",
        body: "текст запроса",
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
