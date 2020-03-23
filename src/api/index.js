import axios from 'axios';

const BASE_URL = '/';

export const checkToken = (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    return axios.get(`${BASE_URL}api/users/checkToken`).catch(error => error);
  };
  
  export const login = (userName, password) => axios.post(`${BASE_URL}api/users/authenticate`, { userName, password }).catch(error => error);
  
  export const register = user => {
  //axios.post(`${BASE_URL}api/users/register`, user).catch(error => error);
  var response = {
      status : 200
  };
  return response;
}

  
  export const update = (id, avatarUrl, oldPassword, newPassword) => {
    const token = localStorage.getItem('token');
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    return axios
      .put(`${BASE_URL}api/users/${id}/update`, {
        avatarUrl,
        password: oldPassword,
        newPassword,
        id,
      })
      .catch(error => error);
  };
  
  export const getUserCredentials = (userId) => {
    const token = localStorage.getItem('token');
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    return axios.get(`${BASE_URL}api/users/getUserCredentials`, userId).catch(error => error);
  };