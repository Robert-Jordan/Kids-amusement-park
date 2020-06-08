import {services} from '../../data/data.js'
import * as actions from './actions';

const initialState = {
    appliedFilters: [],
    services: services,
}


const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.SORT_BY_PRICE:
            let sortedPriceArr = action.payload.direction === "asc" ?
                sortAsc(state.services, 'price') :
                sortDesc(state.services, 'price');

            return {
                ...state,
                filteredServices: sortedPriceArr,
                services: state.services,
                appliedFilters: addFilterIfNotExists(actions.SORT_BY_PRICE, state.appliedFilters)
            };
        case actions.LOAD_DATA:
            // let count = action.payload.count;
            // let countPerPage = action.payload.countPerPage || 20;
            //round up
            // let totalPages = Math.ceil(count / countPerPage);
            // let products = generate(count);
            let filteredServices = state.appliedFilters.length ? state.filteredServices : [];
            return {
                ...state,
                filteredServices: filteredServices,
                services: state.services,
            };
            // case userConstants.LOGIN_SUCCESS:
            //   return {
            //     ...state,
            //     loggedIn: true,
            //     loggingIn: false,
            //     userId: action.id,
            //     token: action.token,
            //   };
        default:
            return state;
    }
};

const sortAsc = (arr, field) => {
    return arr.sort(function (a, b) {
        if (a[field] > b[field]) return 1;

        if (b[field] > a[field]) return -1;

        return 0;
    })
}

const sortDesc = (arr, field) => {
    return arr.sort(function (a, b) {
        if (a[field] > b[field]) return -1;

        if (b[field] > a[field]) return 1;

        return 0;
    })
}

const addFilterIfNotExists = (filter, appliedFilters) => {
    let index = appliedFilters.indexOf(filter);
    if (index === -1) appliedFilters.push(filter);

    return appliedFilters;
}

const removeFilter = (filter, appliedFilters) => {
    let index = appliedFilters.indexOf(filter);
    appliedFilters.splice(index, 1);
    return appliedFilters;
}

export default categoriesReducer;