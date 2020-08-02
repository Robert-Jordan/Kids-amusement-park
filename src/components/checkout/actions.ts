import { GetServiceDataPayload, SetSelectedTimePayload, SetSelectedDatePayload,
        UpdateVisitorsPayload, UpdateCookeryPayload, UpdateDecorationsPayload,
        UpdateAnimatorPayload } from './types';

export interface GetServiceData {
        type: "GET_SERVICE_DATA",
        payload: GetServiceDataPayload
    }
export const GET_SERVICE_DATA = "GET_SERVICE_DATA";
export const getServiceData = (payload: GetServiceDataPayload): GetServiceData => ({
        type: GET_SERVICE_DATA,
        payload
});

export interface ToggleReceiptOpen {
        type: "TOGGLE_RECEIPT_OPEN",
    }
export const TOGGLE_RECEIPT_OPEN = "TOGGLE_RECEIPT_OPEN";
export const toggleReceiptOpen = (): ToggleReceiptOpen => ({
        type: TOGGLE_RECEIPT_OPEN
});

export interface SetSelectedTime {
        type: "SET_SELECTED_TIME",
        payload: SetSelectedTimePayload
    }
export const SET_SELECTED_TIME = "SET_SELECTED_TIME";
export const setSelectedTime = (payload: SetSelectedTimePayload): SetSelectedTime => ({
        type: SET_SELECTED_TIME,
        payload
});

export interface SetSelectedDate {
        type: "SET_SELECTED_DATE",
        payload: SetSelectedDatePayload
    }
export const SET_SELECTED_DATE = "SET_SELECTED_DATE";
export const setSelectedDate = (payload: SetSelectedDatePayload): SetSelectedDate => ({
        type: SET_SELECTED_DATE,
        payload
});


export interface IncreaseVisitorsCount {
        type: "INCREASE_VISITORS_COUNT",
        payload: UpdateVisitorsPayload
    }
export const INCREASE_VISITORS_COUNT = "INCREASE_VISITORS_COUNT";
export const increaseVisitorsCount = (payload: UpdateVisitorsPayload): IncreaseVisitorsCount => ({
        type: INCREASE_VISITORS_COUNT,
        payload
});

export interface DecreaseVisitorsCount {
        type: "DECREASE_VISITORS_COUNT",
        payload: UpdateVisitorsPayload
    }
export const DECREASE_VISITORS_COUNT = "DECREASE_VISITORS_COUNT";
export const decreaseVisitorsCount = (payload: UpdateVisitorsPayload): DecreaseVisitorsCount => ({
        type: DECREASE_VISITORS_COUNT,
        payload
});

export interface UpdateCookery {
        type: "UPDATE_COOKERY",
        payload: UpdateCookeryPayload
    }
export const UPDATE_COOKERY = "UPDATE_COOKERY";
export const updateCookery = (payload: UpdateCookeryPayload): UpdateCookery => ({
        type: UPDATE_COOKERY,
        payload
});

export interface UpdateDecorations {
        type: "UPDATE_DECORATIONS",
        payload: UpdateDecorationsPayload
    }
export const UPDATE_DECORATIONS = "UPDATE_DECORATIONS";
export const updateDecorations = (payload: UpdateDecorationsPayload): UpdateDecorations => ({
        type: UPDATE_DECORATIONS,
        payload
});

export interface UpdateAnimator {
        type: "SET_ANIMATOR",
        payload: UpdateAnimatorPayload
    }
export const SET_ANIMATOR = "SET_ANIMATOR";
export const setAnimator = (payload: UpdateAnimatorPayload): UpdateAnimator => ({
        type: SET_ANIMATOR,
        payload
});

export interface SetSuccessfulCheckout {
        type: "SET_SUCCESSFUL_CHECKOUT"
    }
export const SET_SUCCESSFUL_CHECKOUT = "SET_SUCCESSFUL_CHECKOUT";
export const setSuccessfulCheckout = ():SetSuccessfulCheckout => ({
        type: SET_SUCCESSFUL_CHECKOUT
});