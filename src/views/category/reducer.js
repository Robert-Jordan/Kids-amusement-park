import {
    services
} from '../../data/data.js'
import * as actions from './actions';

const initialState = {
    appliedFilters: [],
    services: services,
}

const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.SORT_BY_PRICE:
            let services = state.filteredServices ?
                       state.filteredServices :
                       state.services;
            let sortedPriceArr = action.payload.direction === "asc" ?
                sortAsc(services, 'price') :
                sortDesc(services, 'price');
            return {
                ...state,
                filteredServices: sortedPriceArr,
                    services: state.services,
                    appliedFilters: addFilterIfNotExists(actions.SORT_BY_PRICE, state.appliedFilters)
            };
        case actions.FILTER_BY_CITY:
            let servicesC;
            if(state.appliedFilters && state.appliedFilters.length > 1 
                && state.appliedFilters.includes(actions.FILTER_BY_CITY)) {
                servicesC = filterCategory(state.services, state.filteredCategory);
                removeFilter(actions.FILTER_BY_CITY, state.appliedFilters);
            }
            else if(state.appliedFilters && state.appliedFilters.length > 0 
                && state.appliedFilters.includes(actions.FILTER_BY_CITY)) {
                    servicesC = state.services;
                    removeFilter(actions.FILTER_BY_CITY, state.appliedFilters);
                }
            else {
                servicesC = state.filteredServices ?
                       state.filteredServices :
                       state.services;
            }
            let city = action.payload.value;
            let filteredByCity = filterCity(servicesC, city);
            return {
                ...state,
                filteredServices: filteredByCity,
                services: state.services,
                appliedFilters: addFilterIfNotExists(actions.FILTER_BY_CITY, state.appliedFilters),
                filteredCity: city,
            };
        case actions.FILTER_BY_CATEGORY:       
            let servicesCat; 
            if(state.appliedFilters && state.appliedFilters.length > 1 
                && state.appliedFilters.includes(actions.FILTER_BY_CATEGORY)) {
                servicesCat = filterCity(state.services, state.filteredCity);
                removeFilter(actions.FILTER_BY_CATEGORY, state.appliedFilters);
            }
            else if(state.appliedFilters && state.appliedFilters.length > 0 
                && state.appliedFilters.includes(actions.FILTER_BY_CATEGORY)) {
                    servicesCat = state.services;
                    removeFilter(actions.FILTER_BY_CATEGORY, state.appliedFilters);
                }
            else {
                servicesCat = state.filteredServices ?
                       state.filteredServices :
                       state.services;
            }
            
            let category = action.payload.value;
            let filteredByCategory = filterCategory(servicesCat, category);
            return {
                ...state,
                filteredServices: filteredByCategory,
                services: state.services,
                appliedFilters: addFilterIfNotExists(actions.FILTER_BY_CATEGORY, state.appliedFilters),
                filteredCategory: category,
            };
        case actions.CLEAR_FILTERS:
            return {
                ...state,
                filteredServices: null,
                services: state.services,
            };
        default:
            return state;
    }
};

const filterCity = (list, filter) => {
    let filteredList = [];
    list.map((service) => {
        if (service.city.name === filter) {
            filteredList.push(service);
        }
    })
    return filteredList;
}

const filterCategory = (list, filter) => {
    let filteredList = [];
    list.map((categories) => {
        categories.category.map((cat) => {
            if (cat.name === filter) {
                filteredList.push(categories);
            }
        })
       
    })
    return filteredList;
}

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