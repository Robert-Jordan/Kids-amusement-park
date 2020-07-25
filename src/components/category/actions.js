
export const SORT_BY_PRICE = "SORT_BY_PRICE";
export const sortByPrice = payload => ({
    type: SORT_BY_PRICE,
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