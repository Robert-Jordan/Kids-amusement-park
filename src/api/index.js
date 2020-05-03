import axios from 'axios';

const BASE_URL = '/';

export const checkToken = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  return axios.get(`${BASE_URL}api/users/checkToken`).catch(error => error);
};

export const login = (userName, password) => {
  var response = {
    status: 200,
    data: {
      token: "21fewg54tggfq234f3t4t",
      id: "12345"
    }
  };
  // var response = {
  //   status: 401,
  //   data: {
  //     errorMessage: "Error! Username or password is wrong.",
  //   }
  // };
  return response;
}
// axios.post(`${BASE_URL}api/users/authenticate`, {
//   userName,
//   password
// }).catch(error => error);

export const register = user => {
  //axios.post(`${BASE_URL}api/users/register`, user).catch(error => error)
  // return new Promise(resolve => setTimeout(() => {}, 2000)).then(()=>{
  //   var response = {
  //     status: 200
  //   };
  //   return response;
  // });

  var response = {
    status: 200,
    data : {
      errorMessage: ''
    }
    // status: 400,
    // data : {
    //   errorMessage: 'Error! User with such email has been already registered, please use another email.'
    // }
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