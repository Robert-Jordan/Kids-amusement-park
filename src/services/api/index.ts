import axios from 'axios';
import { User } from '../../components/registration/types';

const BASE_URL = '/';

export const checkToken = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  return axios.get(`${BASE_URL}api/users/checkToken`).catch(error => error);
};

export const login = (userName: string, password: string) => {
  var response;
  if (password.includes('1')) {
    response = {
      status: 200,
      data: {
        token: "21fewg54tggfq234f3t4t",
        id: "12345"
      }
    }
  } else {
    response = {
      status: 401,
      data: {
        errorMessage: "Email or password you entered is incorrect!",
      }
    };
  };
  return response;
  // }
  //   var response = {
  //     status: 401,
  //     data: {
  //       errorMessage: "Error! Username or password is wrong.",
  //     }
  //   };
  //   return response;
}
// axios.post(`${BASE_URL}api/users/authenticate`, {
//   userName,
//   password
// }).catch(error => error);

export const register = (user: User) => {
  //axios.post(`${BASE_URL}api/users/register`, user).catch(error => error)
  // return new Promise(resolve => setTimeout(() => {}, 2000)).then(()=>{
  //   var response = {
  //     status: 200
  //   };
  //   return response;
  // });

  // if(user.firstName === '1') {
  var response = {
    status: 200,
    data: {
      errorMessage: ''
    }
  };
  return response;
  // }
  // var errRes = {
  //   status: 400,
  //   data : {
  //     errorMessage: 'Error! User with such email has been already registered, please use another email.'
  //   }
  // }
  // return errRes;
}

interface UpdateUser {
  email: string;
  password: string;
  newPassword: string;
}

export const update = (user: UpdateUser) => {
  // const token = localStorage.getItem('token');
  // axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  // return axios
  //   .put(`${BASE_URL}api/users/${id}/update`, {
  //     avatarUrl,
  //     password: oldPassword,
  //     newPassword,
  //     id,
  //   })
  //   .catch(error => error);
  var response
  if (user.password === user.newPassword) {
    response = {
      status: 400,
      data: {
        errorMessage: 'Old and new password must not match!'
      }
    }
  } else if (user.password.indexOf('1') === -1 || user.password.length < 8) {
    response = {
      status: 400,
      data: {
        errorMessage: 'You have entered wrong current password!'
      }
    }
  } else {
    response = {
      status: 200,
    };
  }
  return response;
};

export const getUserCredentials = (userId: string) => {
  // const token = localStorage.getItem('token');
  // axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  // return axios.get(`${BASE_URL}api/users/getUserCredentials`, userId).catch(error => error);
  var response = {
    status: 200,
    data: {
      firstName: 'FName',
      lastName: "LName",
      email: 'email@test.com'
    }
  };
  return response;
};