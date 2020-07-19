import axios from "axios";


export function  login (values){
    return dispatch => {
        const url = "http://localhost:5000/api/auth/users/login";
        return  axios
        .post(url, values)
    }
}