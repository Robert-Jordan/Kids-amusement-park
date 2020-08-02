import { SortByPricePayload, FilterByCityPayload, FilterByCategoryPayload } from './types';

export interface SortByPrice {
    type: "SORT_BY_PRICE",
    payload: SortByPricePayload
}
export const SORT_BY_PRICE = "SORT_BY_PRICE";
export const sortByPrice = (payload: SortByPricePayload): SortByPrice => ({
    type: SORT_BY_PRICE,
    payload
});

export interface FilterByCity {
    type: "FILTER_BY_CITY",
    payload: FilterByCityPayload
}
export const FILTER_BY_CITY = "FILTER_BY_CITY";
export const filterByCity = (payload: FilterByCityPayload): FilterByCity => ({
    type: FILTER_BY_CITY,
    payload
});


export interface FilterByCategory {
    type: "FILTER_BY_CATEGORY",
    payload: FilterByCategoryPayload
}
export const FILTER_BY_CATEGORY = "FILTER_BY_CATEGORY";
export const filterByCategory = (payload: FilterByCategoryPayload): FilterByCategory => ({
    type: FILTER_BY_CATEGORY,
    payload
});

export interface ClearFilters {
    type: "CLEAR_FILTERS"
}
export const CLEAR_FILTERS = "CLEAR_FILTERS";
export const clearFilters = (): ClearFilters => ({
    type: CLEAR_FILTERS
});