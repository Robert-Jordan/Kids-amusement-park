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
        it('should recalculate cart total with including of incoming list of dishes', async () => {
            // Arrange
            const cookery = [
                { name: 'Cake', count: 3 },
                { name: 'Pizza', count: 5 },
                { name: 'Burger', count: 0 },
            ]
            let cookerySum = calculateCookerySum(cookery);
            let serviceData = calculateServiceData();
            const action = { type: actions.UPDATE_COOKERY, payload: cookery };

            const expectedState = {
                ...initialState,
                cookery: action.payload,
                total: cookerySum,
                serviceData: serviceData,
            };

            // Act
            const currentState = reducer({
                ...initialState,
                serviceData: serviceData,
            }, action);
            // Assert
            expect(currentState).toEqual(expectedState);
        });
    });

    describe('updateDecorations', () => {
        it('should recalculate cart total with including of incoming list of decorations', async () => {
            // Arrange
            const decorations = [
                { name: 'Pinata', count: 3 },
                { name: 'Baloon', count: 2 },
                { name: 'Fortune wheel', count: 5 }
            ];
            let decorationsSum = calculateDecorationsSum(decorations);
            let serviceData = calculateServiceData();
            const action = { type: actions.UPDATE_DECORATION, payload: decorations };

            const expectedState = {
                ...initialState,
                decorations: action.payload,
                total: decorationsSum,
                serviceData: serviceData,
            };

            // Act
            debugger;
            const currentState = reducer({
                ...initialState,
                serviceData: serviceData,
            }, action);
            // Assert
            expect(currentState).toEqual(expectedState);
        });
    });

    describe('setAnimator', () => {
        it('should set new animator and recalculate cart total according to animator`s price', async () => {
            // Arrange
            const animator = {
                name: "Spider man",
                price: 1900
            };
            let serviceData = calculateServiceData();
            const action = { type: actions.SET_ANIMATOR, payload: animator };

            const expectedState = {
                ...initialState,
                animator: action.payload,
                total: action.payload.price,
                serviceData: serviceData,
            };

            // Act
            debugger;
            const currentState = reducer({
                ...initialState,
                serviceData: serviceData,
            }, action);
            // Assert
            expect(currentState).toEqual(expectedState);
        });
    });

    describe('setNewAnimator', () => {
        it('should set new animator when one is already selected and recalculate cart total according to animator`s price', async () => {
            // Arrange
            const animator = {
                name: "Pirates",
                price: 2300
            };
            let serviceData = calculateServiceData();
            const action = { type: actions.SET_ANIMATOR, payload: animator };

            const expectedState = {
                ...initialState,
                animator: action.payload,
                total: action.payload.price,
                serviceData: serviceData,
            };

            // Act
            debugger;
            const currentState = reducer({
                ...initialState,
                serviceData: serviceData,
                animator: {
                    name: "Spider man",
                    price: 1900
                }
            }, action);
            // Assert
            expect(currentState).toEqual(expectedState);
        });
    });

    describe('setNewAnimator', () => {
        it('should set new animator when one is already selected and recalculate cart total according to animator`s price', async () => {
            // Arrange
            const animator = {
                name: "Pirates",
                price: 2300
            };
            let serviceData = calculateServiceData();
            const action = { type: actions.SET_ANIMATOR, payload: animator };

            const expectedState = {
                ...initialState,
                animator: action.payload,
                total: action.payload.price,
                serviceData: serviceData,
            };

            // Act
            debugger;
            const currentState = reducer({
                ...initialState,
                serviceData: serviceData,
                animator: {
                    name: "Spider man",
                    price: 1900
                }
            }, action);
            // Assert
            expect(currentState).toEqual(expectedState);
        });
    });
});

const calculateCookerySum = (cookery) => {
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

    return cookerySum;
}

const calculateServiceData = () => {
    let serviceData;
    data.services.map(serv => {
        if (serv.id === 1) {
            serviceData = serv;
        }
    }
    )
    return serviceData;
}

const calculateDecorationsSum = (decorations) => {
    let decorationsSumArr = decorations !== undefined && decorations.length ?
        decorations.map(decor => {
            let decorPrice;
            data.additionalServices.map(decorItem => {
                if (decorItem.name === decor.name) {
                    decorPrice = decorItem.price;
                }
            });
            return decor.count * decorPrice;
        }) :
        0;
    let decorationsSum = decorationsSumArr === 0 || decorationsSumArr === undefined ?
        0 :
        decorationsSumArr.reduce((a, b) => a + b, 0);

    return decorationsSum;
}