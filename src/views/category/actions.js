
export const SORT_BY_PRICE = "SORT_BY_PRICE";
export const sortByPrice = payload => ({
    type: SORT_BY_PRICE,
    payload
});

export const LOAD_DATA = "LOAD_DATA";
export const loadData = (payload) => ({
    type: LOAD_DATA,
    payload
});

export const FILTER_BY_CITY = "FILTER_BY_CITY";
export const filterByCity = (payload) => ({
    type: FILTER_BY_CITY,
    payload
});

export const FILTER_BY_CATEGORY = "FILTER_BY_CATEGORY";
export const filterByCategory = (payload) => ({
    type: FILTER_BY_CATEGORY,
    payload
});

export const CLEAR_FILTERS = "CLEAR_FILTERS";
export const clearFilters = () => ({
    type: CLEAR_FILTERS
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