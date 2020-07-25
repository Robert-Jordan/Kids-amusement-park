import reducer from './reducer';
import * as actions from './actions';
import * as data from '../../services/data/data';

const initialState = {
    appliedFilters: [],
    services: data.services,
};

describe('categoriesReducer', () => {
    describe('sortByPrice', () => {
        it('should sort list of services by price in asc', async () => {
            // Arrange
            const sortByPriceIncomingData = {
                direction: 'asc'
            };
            const action = { type: actions.SORT_BY_PRICE, payload: sortByPriceIncomingData };
            const expectedState = { 
                ...initialState, 
                filteredServices: sortByPriceIncomingData.direction === "asc" ?
                                  sortAsc(data.services, 'price') :
                                  sortDesc(data.services, 'price'),
                services: data.services,
                appliedFilters: [actions.SORT_BY_PRICE]
            };
            // Act
            const currentState = reducer(initialState, action);
            // Assert
            expect(currentState).toEqual(expectedState);
        });
    });
    
    describe('filter by category', () => {
        it('should return list of services filtered by selected category', async () => {
            // Arrange
            const filterByCategoryIncomingData = {
                value: 'Birthdays'
            };
            const action = { type: actions.FILTER_BY_CATEGORY, payload: filterByCategoryIncomingData };
            const expectedState = { 
                ...initialState, 
                filteredServices: filterByCategory(data.services, filterByCategoryIncomingData.value),
                services: data.services,
                appliedFilters: [actions.SORT_BY_PRICE, actions.FILTER_BY_CATEGORY],
                filteredCategory: filterByCategoryIncomingData.value,
            };
            // Act
            const currentState = reducer(initialState, action);
            // Assert
            expect(currentState).toEqual(expectedState);
        });
    });

    describe('filter by city', () => {
        it('should return list of services filtered by selected city', async () => {
            // Arrange
            const filterByCityIncomingData = {
                value: 'Kharkiv'
            };
            const action = { type: actions.FILTER_BY_CITY, payload: filterByCityIncomingData };
            const expectedState = { 
                ...initialState, 
                filteredServices: filterByCity(data.services, filterByCityIncomingData.value),
                services: data.services,
                appliedFilters: [actions.SORT_BY_PRICE, actions.FILTER_BY_CATEGORY, actions.FILTER_BY_CITY],
                filteredCity: filterByCityIncomingData.value,
            };
            // Act
            const currentState = reducer(initialState, action);
            // Assert
            expect(currentState).toEqual(expectedState);
        });
    });

    describe('clear filters', () => {
        it('should clear all applied filters', async () => {
            // Arrange
            const action = { type: actions.CLEAR_FILTERS };
            const expectedState = { 
                ...initialState, 
                filteredServices: null,
                services: data.services,
            };
            // Act
            const currentState = reducer(initialState, action);
            // Assert
            expect(currentState).toEqual(expectedState);
        });
    });
});

const filterByCity = (list, filter) => {
    let filteredList = [];
    list.map((service) => {
        if (service.city.name === filter) {
            filteredList.push(service);
        }
    })
    return filteredList;
}

const filterByCategory = (list, filter) => {
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