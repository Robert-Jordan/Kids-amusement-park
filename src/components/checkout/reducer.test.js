import reducer from './reducer';
import * as actions from './actions';
import * as data from '../../services/data/data';

const initialState = {
    serviceData: '',
    receiptOpen: 'order-none',
    adultsCount: 0,
    childrenCount: 0,
    total: 0,
    cookery: [],
    decorations: [],
    animator: {
        name: '',
        price: 0
    },
    successfullOrders: [],
};

describe('checkoutReducer', () => {
    describe('getServiceData', () => {
        it('should return data of service by id', async () => {
            // Arrange
            const payload = {
                serviceId: 1
            }
            const action = { type: actions.GET_SERVICE_DATA, payload: payload };
            let service;
            data.services.map(serv => {
                if (serv.id === parseInt(action.payload.serviceId)) {
                    service = serv;
                }
            });
            const expectedState = {
                ...initialState,
                serviceData: service
            };
            // Act
            const currentState = reducer(initialState, action);
            // Assert
            expect(currentState).toEqual(expectedState);
        });
    });

    describe('increaseCountOfVisitors', () => {
        it('should return increased count of adults to +1 and recalculate order total', async () => {
            // Arrange
            const action = { type: actions.INCREASE_VISITORS_COUNT, payload: 'adult' };
            const newAdults = action.payload === 'adult' ?
                initialState.adultsCount + 1 :
                initialState.adultsCount;
            const newChildren = initialState.childrenCount;
            const expectedState = {
                ...initialState,
                adultsCount: newAdults,
                childrenCount: newChildren,
                total: 0
            };
            // Act
            const currentState = reducer(initialState, action);
            // Assert
            expect(currentState).toEqual(expectedState);
        });
    });

    describe('decreaseCountOfVisitors', () => {
        it('should return decreased count of adults to -1 and recalculate order total', async () => {
            // Arrange
            const action = { type: actions.DECREASE_VISITORS_COUNT, payload: 'adult' };
            const newAdults = action.payload === 'adult' ?
                (initialState.adultsCount > 0
                    ? initialState.adultsCount - 1
                    : initialState.adultsCount)
                : initialState.adultsCount;
            const newChildren = initialState.childrenCount;
            const expectedState = {
                ...initialState,
                adultsCount: newAdults,
                childrenCount: newChildren,
                total: 0
            };
            // Act
            const currentState = reducer(initialState, action);
            // Assert
            expect(currentState).toEqual(expectedState);
        });
    });

    describe('updateCookery', () => {
        it('should calculate total for incoming list of dishes', async () => {
            // Arrange
            const cookery = [
                { name: 'Cake', count: 3 },
                { name: 'Pizza', count: 5 },
                { name: 'Burger', count: 0 },
            ]
            let cookerySumArr = cookery !== undefined && cookery.length 
                ? cookery.map(dish => {
                    let dishPrice;
                    data.cookery.map(cookeryItem => {
                        if (cookeryItem.name === dish.name) {
                            dishPrice = cookeryItem.price;
                        }
                    });
                    return dish.count * dishPrice;
                }) 
                : 0;
            let cookerySum = cookerySumArr === 0 || cookerySumArr === undefined 
                ? 0 
                : cookerySumArr.reduce((a, b) => a + b, 0);

            const action = [
                { type: actions.GET_SERVICE_DATA, payload: { serviceId: 1 } },
                { type: actions.UPDATE_COOKERY, payload: cookery }
            ];
            const expectedState = {
                ...initialState,
                cookery: action[1].payload,
                total: cookerySum,
            };
            // Act
            reducer(initialState, action[0]);
            const currentState = reducer(initialState, action[1]);
            // Assert
            expect(currentState).toEqual(expectedState);
        });
    });
});