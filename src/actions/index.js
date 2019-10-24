import { axiosWithAuth } from '../component/axiosWithAuth';

export const FETCHING_USERS_START = "FETCHING_USERS_START"
export const FETCHING_USERS_SUCCESS = "FETCHING_USERS_SUCCESS"
export const FETCHING_USERS_FAILURE = "FETCHING_USERS_FAILURE"

export const getUser = () => dispatch => {
  dispatch({ type: FETCHING_USERS_START });
  axiosWithAuth()
    .get('/user')
    .then(res => {
      console.log(res.data)
      dispatch({ type: FETCHING_USERS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCHING_USERS_FAILURE, payload: err.data });
    });
}
