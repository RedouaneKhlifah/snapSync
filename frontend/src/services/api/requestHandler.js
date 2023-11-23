import axios from "./Axios";
/**
 * Handle requests to the database and return object that has action.
 *
 * @async
 * @param {string} method - The HTTP method for the request (e.g., 'get', 'post').
 * @param {string} Url - The URL for the request.
 * @param {Object} - The data to be sent with the request.
 * @param {string} actionType - The action type to dispatch based on the result.
 * @throws {Error} If there is an error during the request.
 * @returns {Promise<void>} A Promise that resolves after handling the request.
 */

async function requestHandler(
    dispatch,
    actionType,
    method,
    Url,
    data = {},
    id
) {
    method = method.toLowerCase();
    let response;
    try {
        switch (method) {
            case "get":
                response = await axios.get(Url);
                break;
            case "post":
                response = await axios.post(Url, data);
                break;

            case "patch":
                response = await axios.patch(`${Url}/${id}`, data);
                break;
            case "delete":
                response = await axios.delete(`${Url}/${id}`, data);
        }
        dispatch({
            type: actionType,
            payload: response?.data
        });
    } catch (err) {
        dispatch({
            type: "ERROR",
            payload: err.response
                ? err.response.data.message
                : "An error occurred"
        });
        throw err;
    }
}

export default requestHandler;
