export const GET_SERVICE_DATA = "GET_SERVICE_DATA";
export const getServiceData = payload => ({
        type: GET_SERVICE_DATA,
        payload
});

export const TOGGLE_RECEIPT_OPEN = "TOGGLE_RECEIPT_OPEN";
export const toggleReceiptOpen = () => ({
        type: TOGGLE_RECEIPT_OPEN
});

export const SET_SELECTED_TIME = "SET_SELECTED_TIME";
export const setSelectedTime = payload => ({
        type: SET_SELECTED_TIME,
        payload
});
export const SET_SELECTED_DATE = "SET_SELECTED_DATE";
export const setSelectedDate = payload => ({
        type: SET_SELECTED_DATE,
        payload
});

export const INCREASE_VISITORS_COUNT = "INCREASE_VISITORS_COUNT";
export const increaseVisitorsCount = payload => ({
        type: INCREASE_VISITORS_COUNT,
        payload
});
export const DECREASE_VISITORS_COUNT = "DECREASE_VISITORS_COUNT";
export const decreaseVisitorsCount = payload => ({
        type: DECREASE_VISITORS_COUNT,
        payload
});

export const UPDATE_COOKERY = "UPDATE_COOKERY";
export const updateCookery = payload => ({
        type: UPDATE_COOKERY,
        payload
});
export const UPDATE_DECORATION = "UPDATE_DECORATION";
export const updateDecoration = payload => ({
        type: UPDATE_DECORATION,
        payload
});
export const SET_ANIMATOR = "SET_ANIMATOR";
export const setAnimator = payload => ({
        type: SET_ANIMATOR,
        payload
});

export const SET_SUCCESSFUL_CHECKOUT = "SET_SUCCESSFUL_CHECKOUT";
export const setSuccessfulCheckout = () => ({
        type: SET_SUCCESSFUL_CHECKOUT
});