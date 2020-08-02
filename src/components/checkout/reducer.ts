import { Reducer } from 'redux';
import { CheckoutState } from './types';
import { Cookery, Decorations, Animator, SuccessfulOrder } from './types';
import { Cookery as CategoryCookery, AdditionalServices } from '../category/types';
import * as actions from './actions';
import { services } from '../../services/data/data';

const initialState: CheckoutState = {
  serviceData: undefined,
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
  selectedDate: null,
  selectedTime:
  {
    startTime: null,
    endTime: null
  }
};

const checkoutReducer: Reducer<CheckoutState> = (state: CheckoutState = initialState, action) => {
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
        selectedDate: action.payload.selectedDate
      };
    case actions.INCREASE_VISITORS_COUNT:
      let newAdults = action.payload.visitorType === 'adult' ?
        state.adultsCount + 1 :
        state.adultsCount;
      let newChildren = action.payload.visitorType === 'children' ?
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
      let newAdultsDec = action.payload.visitorType === 'adult' ?
        (state.adultsCount > 0 ? state.adultsCount - 1 :
          state.adultsCount) :
        state.adultsCount;
      let newChildrenDec = action.payload.visitorType === 'children' ?
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
        state.childrenCount, action.payload.cookery, state.decorations,
        state.animator)
      return {
        ...state,
        cookery: action.payload.cookery,
        total: totalCook,
      };
    case actions.UPDATE_DECORATIONS:
      let totalUpd = calculateTotal(state, state.adultsCount,
        state.childrenCount, state.cookery, action.payload.decorations,
        state.animator);
      return {
        ...state,
        decorations: action.payload.decorations,
        total: totalUpd
      };
    case actions.SET_ANIMATOR:
      let totalAnim = calculateTotal(state, state.adultsCount,
        state.childrenCount, state.cookery, state.decorations,
        action.payload.animator)
      return {
        ...state,
        animator: action.payload.animator,
        total: totalAnim,
      };
    case actions.SET_SUCCESSFUL_CHECKOUT:
      state.successfullOrders.push(ConvertStateToSuccessfulOrder(state))
      return {
        ...state,
        receiptOpen: 'order-none',
        adultsCount: 0,
        childrenCount: 0,
        total: 0,
        cookery: [],
        decorations: [],
        selectedDate: '',
        selectedTime: { startTime: '', endTime: '' }
      }
    default:
      return state;
  }
};

const calculateTotal = (state: CheckoutState, newAdults: number, newChildren: number,
  cookery: Cookery, decorations: Decorations, animator: Animator) => {
  let adultPrice = 0;
  if (state.serviceData !== undefined && state.serviceData.price !== undefined) {
    adultPrice = state.serviceData.price.adultPrice;
  }
  let childrenPrice = 0;
  if (state.serviceData !== undefined && state.serviceData.price !== undefined) {
    childrenPrice = state.serviceData.price.childrenPrice;
  }

  let visitorsSum = newAdults * adultPrice + newChildren * childrenPrice;
  let cookerySumArr = cookery !== undefined && cookery.length
    ? GetCookerySumArr(cookery, state.serviceData !== undefined && state.serviceData.cookery !== undefined
      ? state.serviceData.cookery
      : [])
    : [];
  let cookerySum = cookerySumArr.length > 0
    ? cookerySumArr.reduce((a, b) => a + b, 0)
    : 0;

  let decorationsSumArr = decorations !== undefined && decorations.length
    ? GetDecorationsSumArray(decorations, state.serviceData !== undefined && state.serviceData.additionalServices !== undefined
      ? state.serviceData.additionalServices
      : [])
    : [];
  let decorationsSum = decorationsSumArr.length > 0
    ? decorationsSumArr.reduce((a, b) => a + b, 0)
    : 0;

  return visitorsSum + cookerySum + decorationsSum + animator.price;
}

const GetCookerySumArr = (cookery: Cookery, serviceDataCookery: CategoryCookery[]): number[] => {
  return cookery.map(dish => {
    let dishPrice;
    serviceDataCookery.map(cookeryItem => {
      if (cookeryItem.name === dish.name) {
        dishPrice = cookeryItem.price;
      }
    });
    return dish.count * (dishPrice !== undefined ? dishPrice : 1);
  })
}

const GetDecorationsSumArray = (decorations: Decorations, additionalServices: AdditionalServices[]): number[] => {
  return decorations.map(decor => {
    let decorPrice;
    additionalServices.map(decorItem => {
      if (decorItem.name === decor.name) {
        decorPrice = decorItem.price;
      }
    });
    return decor.count * (decorPrice !== undefined ? decorPrice : 1);
  })
}

const ConvertStateToSuccessfulOrder = (state: CheckoutState): SuccessfulOrder => {
  let successfulOrder = {
    title: state.serviceData !== undefined ? state.serviceData.title : '',
    selectedDate: state.selectedDate,
    selectedTime: {
      startTime: state.selectedTime.startTime,
      endTime: state.selectedTime.endTime,
    },
    total: state.total
  };
  return successfulOrder;
}

export default checkoutReducer;