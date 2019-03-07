import axios from 'axios';

export const LOGIN_START = 'LOGIN_START'

export const login = () => {

}

export const getData = () => {
    axios
        .get('http://localhost:5000/api/data', {

        })
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        })
}