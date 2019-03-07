import axios from 'axios';

export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export const login = creds => dispatch => {
    dispatch({type: LOGIN_START })
        return axios.post('http://localhost:5000/api/data', creds)
    .then(res => {
        localStorage.setItem('token', res.data.payload);
        dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload});
    })
    .catch(error => {
        dispatch({ type: LOGIN_FAILURE, payload: error})
    })
}

// export const getData = () => {
//     axios
//         .get('http://localhost:5000/api/data', {
//             headers: { Authorization: localStorage.getItem('token') }
//         })
//         .then(res => {
//             console.log(res.data);
//         })
//         .catch(err => {
//             console.log(err);
//         })
// }