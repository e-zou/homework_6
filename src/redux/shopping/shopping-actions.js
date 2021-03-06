import * as actionTypes from './shopping-types';

// Methods to be dispatched to the shopping-reducer with the string identifiers

export const addToCart = (itemID) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: {
            id: itemID,
        }
    }
}

export const removeFromCart = (itemID) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: {
            id: itemID,
        }
    }
}

export const adjustQuantity = (itemID, value) => {
    return {
        type: actionTypes.ADJUST_QTY,
        payload: {
            id: itemID,
            qty: value,
        }
    }
}

export const loadCurrentItem = (item) => {
    return {
        type: actionTypes.LOAD_CURRENT_ITEM,
        payload: item,
    }
}

export const changeColor = (itemID, value) => {
    console.log("Changing item id: ", itemID, " with value: ", value);
    return {
        type: actionTypes.CHANGE_ITEM_COLOR,
        payload: {
            id: itemID,
            color: value,
        }
    }
}

export const changeSize = (itemID, value) => {
    return {
        type: actionTypes.CHANGE_ITEM_SIZE,
        payload: {
            id: itemID,
            size: value,
        }
    }
}