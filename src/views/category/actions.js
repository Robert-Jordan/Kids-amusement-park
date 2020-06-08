
export const SORT_BY_PRICE = "SORT_BY_PRICE";
export const sortByPrice = payload => ({
    type: SORT_BY_PRICE,
    payload
});

export const SORT_BY_CITY = "SORT_BY_CITY";
export const sortByCity = payload => ({
    type: SORT_BY_CITY,
    payload
});

export const SORT_BY_CATEGORY = "SORT_BY_CATEGORY";
export const sortByCategory = payload => ({
    type: SORT_BY_CATEGORY,
    payload
});

export const LOAD_DATA = "LOAD_DATA";
export const loadData = (payload) => ({
    type: LOAD_DATA,
    payload
});

export const GO_TO_CHECKOUT = 'GO_TO_CHECKOUT';
export const goToCheckout = service => async (dispatch) => {
//   dispatch({
//     type: CHECK_TOKEN_REQUEST
//   });
//   const result = await userService.checkToken(token);
//   if (result.status === 200 && result !== undefined) {
//     localStorage.setItem('token', result.data.token);
//     dispatch({
//       type: CHECK_TOKEN_SUCCESS,
//       token: result.data.token,
//       id: result.data.id
//     });
//   } else {
//     localStorage.removeItem('token');
//     dispatch({
//       type: CHECK_TOKEN_FAILURE
//     });
//   }
};

export const VIEW_SERVICE_DETAILS = 'VIEW_SERVICE_DETAILS';
export const viewDetails = service => async (dispatch) => {
    // dispatch({
    //   type: CHECK_TOKEN_REQUEST
    // });
    // const result = await userService.checkToken(token);
    // if (result.status === 200 && result !== undefined) {
    //   localStorage.setItem('token', result.data.token);
    //   dispatch({
    //     type: CHECK_TOKEN_SUCCESS,
    //     token: result.data.token,
    //     id: result.data.id
    //   });
    // } else {
    //   localStorage.removeItem('token');
    //   dispatch({
    //     type: CHECK_TOKEN_FAILURE
    //   });
    // }
  };