import axios from "axios";
import setAuthorizationToken from '../_utils/setAuthorizationToken';
import { UserActionTypes } from '../_constants/user.types';
import jwt from 'jsonwebtoken';


export function setCurrentUser(user){
    return {
        type: UserActionTypes.SET_CURRENT_USER,
        user
    }
}

export function  login (values){
    return dispatch => {
        const url = "http://localhost:5000/api/auth/users/login";
        return  axios
        .post(url, values).then(res => {
            const token = res.data.token;
            localStorage.setItem('jwtToken',token);
            setAuthorizationToken(token);
            dispatch(setCurrentUser(jwt.decode(token)));
        });
    }
}

export function logout(){
    return dispatch => {
        localStorage.removeItem('jwtToken');
        setAuthorizationToken(false);
        dispatch(setCurrentUser({}));
    }
}