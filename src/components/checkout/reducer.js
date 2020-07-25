import * as actions from './actions.js';
import { services } from '../../services/data/data.js';

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

const checkoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_SERVICE_DATA:
      let service;
      services.map(serv => {
        if (serv.id === parseInt(action.payload.serviceId)) {
          service = serv;
        }
      });
      return {
        ...state,
        serviceData: service,
      };
    case actions.TOGGLE_RECEIPT_OPEN:
      let receiptOpenNewState = state.receiptOpen === 'order-none' ?
        '' :
        'order-none';
      return {
        ...state,
        receiptOpen: receiptOpenNewState,
      };
    case actions.SET_SELECTED_TIME:
      return {
        ...state,
        selectedTime: action.payload
      };
    case actions.SET_SELECTED_DATE:
      return {
        ...state,
        selectedDate: action.payload
      };
    case actions.INCREASE_VISITORS_COUNT:
      let newAdults = action.payload === 'adult' ?
        state.adultsCount + 1 :
        state.adultsCount;
      let newChildren = action.payload === 'children' ?
        state.childrenCount + 1 :
        state.childrenCount;
      let total = calculateTotal(state, newAdults, newChildren,
        state.cookery, state.decorations, state.animator)
      return {
        ...state,
        adultsCount: newAdults,
        childrenCount: newChildren,
        total: total,
      };
    case actions.DECREASE_VISITORS_COUNT:
      let newAdultsDec = action.payload === 'adult' ?
        (state.adultsCount > 0 ? state.adultsCount - 1 :
          state.adultsCount) :
        state.adultsCount;
      let newChildrenDec = action.payload === 'children' ?
        (state.childrenCount > 0 ? state.childrenCount - 1 :
          state.childrenCount) :
        state.childrenCount;
      let totalDec = calculateTotal(state, newAdultsDec, newChildrenDec,
        state.cookery, state.decorations, state.animator);
      return {
        ...state,
        adultsCount: newAdultsDec,
          childrenCount: newChildrenDec,
          total: totalDec,
      };
    case actions.UPDATE_COOKERY:
      let totalCook = calculateTotal(state, state.adultsCount,
        state.childrenCount, action.payload, state.decorations,
        state.animator)
      return {
        ...state,
        cookery: action.payload,
        total: totalCook,
      };
    case actions.UPDATE_DECORATION:
      let totalUpd = calculateTotal(state, state.adultsCount,
        state.childrenCount, state.cookery, action.payload,
        state.animator);
      return {
        ...state,
        decorations: action.payload,
        total: totalUpd
      };
    case actions.SET_ANIMATOR:
      let totalAnim = calculateTotal(state, state.adultsCount,
        state.childrenCount, state.cookery, state.decorations,
        action.payload)
      return {
        ...state,
        animator: action.payload,
        total: totalAnim,
      };
    case actions.SET_SUCCESSFUL_CHECKOUT:
      state.successfullOrders.push(state)
      return {
        ...state,
        receiptOpen: 'order-none',
        adultsCount: 0,
        childrenCount: 0,
        total: 0,
        cookery: [],
        decorations: [],
        selectedDate: '',
        selectedTime: { startTime:'', endTime:'' }
      }
      default:
        return state;
  }
};

const calculateTotal = (state, newAdults, newChildren,
  cookery, decorations, animator) => {
   let adultPrice = 0;
   if(state.serviceData.price !== undefined){
     adultPrice = state.serviceData.price.adultPrice;
   }
   let childrenPrice = 0;
   if(state.serviceData.price !== undefined){
     childrenPrice = state.serviceData.price.childrenPrice;
   }

  let visitorsSum = newAdults * adultPrice + newChildren * childrenPrice;
  let cookerySumArr = cookery !== undefined && cookery.length ?
    cookery.map(dish => {
      let dishPrice;
      state.serviceData.cookery.map(cookeryItem => {
        if (cookeryItem.name === dish.name) {
          dishPrice = cookeryItem.price;
        }
      });
      return dish.count * dishPrice;
    }) :
    0;
  let cookerySum = cookerySumArr === 0 || cookerySumArr === undefined ?
    0 :
    cookerySumArr.reduce((a, b) => a + b, 0);

  let decorationsSumArr = decorations !== undefined && decorations.length ?
    decorations.map(decor => {
      let decorPrice;
      state.serviceData.additionalServices.map(decorItem => {
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

  return visitorsSum + cookerySum + decorationsSum + animator.price;
}

export default checkoutReducer;