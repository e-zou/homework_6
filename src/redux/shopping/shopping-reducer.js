import * as actionTypes from './shopping-types';

import item1 from '../../images/products/item1.png';
import item2 from '../../images/products/item2.png';
import item3 from '../../images/products/item3.png';
import item4 from '../../images/products/item4.png';
import item5 from '../../images/products/item5.png';
import item6 from '../../images/products/item6.png';

const INITIAL_STATE = {
    // {id, title, desc, details, price, color img, stars, numReviews}

    products: [
        {
            id: 1,
            title: "Jeweled Collar",
            desc: "Stylish and dazzling jewels securly embedded into a black, leather collar",
            detail1: "Collar does not stretch, so please leave 2 fingers between collar and dog neck. A proper distance won’t leave any room for dog to chew.",
            detail2: "Collar is not for tie out, so do not leave your dog unattended with this collar on",
            detail3: "Made with 100% recycled leather and eco-friendly plastic for jewels",
            detail4: "Choose from multiple colors",
            price: 59.99,
            color: "red",
            size: "small",
            img: item1,
            stars: 5,
            numReviews: 230,
        },
        {
            id: 2,
            title: "Jojo Harness",
            desc: "A durable nylon harness to keep your dog close and easy to identify",
            detail1: "Price includes personalization; add pet's name and phone number for quick identification",
            detail2: "Depending on size, harness accommodates 24 to 28 characters, including spaces",
            detail3: "Girth size is measured around the full chest of the dog, just behind its front legs",
            detail4: "Choose from multiple colors",
            price: 44.99,
            color: "red",
            size: "medium",
            img: item2,
            stars: 5,
            numReviews: 213,
        },
        {
            id: 3,
            title: "Luxury Cat Collar",
            desc: "Stylish and dazzling jewels securly embedded into a black, leather collar",
            detail1: "Collar does not stretch, so please leave 2 fingers between collar and dog neck. A proper distance won’t leave any room for dog to chew.",
            detail2: "Collar is not for tie out, so do not leave your dog unattended with this collar on",
            detail3: "Made with 100% recycled leather and eco-friendly plastic for jewels",
            detail4: "Choose from multiple colors",
            price: 39.99,
            color: "red",
            size: "large",
            img: item3,
            stars: 5,
            numReviews: 143,
        },
        {
            id: 4,
            title: "Choco Harness",
            desc: "Stylish and dazzling jewels securly embedded into a black, leather collar",
            detail1: "Collar does not stretch, so please leave 2 fingers between collar and dog neck. A proper distance won’t leave any room for dog to chew.",
            detail2: "Collar is not for tie out, so do not leave your dog unattended with this collar on",
            detail3: "Made with 100% recycled leather and eco-friendly plastic for jewels",
            detail4: "Choose from multiple colors",
            price: 59.99,
            color: "red",
            size: "small",
            img: item4,
            stars: 5,
            numReviews: 54,
        },
        {
            id: 5,
            title: "Basic Cat Collar",
            desc: "Stylish and dazzling jewels securly embedded into a black, leather collar",
            detail1: "Collar does not stretch, so please leave 2 fingers between collar and dog neck. A proper distance won’t leave any room for dog to chew.",
            detail2: "Collar is not for tie out, so do not leave your dog unattended with this collar on",
            detail3: "Made with 100% recycled leather and eco-friendly plastic for jewels",
            detail4: "Choose from multiple colors",
            price: 34.99,
            color: "red",
            size: "small",
            img: item5,
            stars: 5,
            numReviews: 234,
        },
        {
            id: 6,
            title: "Colorful Food Bowls",
            desc: "Stylish and dazzling jewels securly embedded into a black, leather collar",
            detail1: "Collar does not stretch, so please leave 2 fingers between collar and dog neck. A proper distance won’t leave any room for dog to chew.",
            detail2: "Collar is not for tie out, so do not leave your dog unattended with this collar on",
            detail3: "Made with 100% recycled leather and eco-friendly plastic for jewels",
            detail4: "Choose from multiple colors",
            price: 59.99,
            color: "red",
            size: "medium",
            img: item6,
            stars: 5,
            numReviews: 135,
        },

    ],
    // {id, title, desc, details, price, color img, stars, numReviews, qty}
    cart: [],
    currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            // Get items data from products array
            // Check if item is in cart
            const item = state.products.find(prod => prod.id === action.payload.id);
            const inCart = state.cart.find(item => item.id === action.payload.id ? true : false);
            return {
                // spread the state
                ...state,
                // if is in the cart, map throu
                cart: inCart
                    ? state.cart.map(item =>
                        item.id === action.payload.id
                            ? { ...item, qty: item.qty + 1 }
                            : item)
                    // create array and add to state of cart
                    : [...state.cart, { ...item, qty: 1 }],
            };
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                // deletes the item id that's not in array
                cart: state.cart.filter(item => item.id !== action.payload.id),
            };
        case actionTypes.ADJUST_QTY:
            return {
                ...state,
                cart: state.cart.map(item => item.id === action.payload.id ? { ...item, qty: action.payload.qty } : item),
            };
        case actionTypes.LOAD_CURRENT_ITEM:
            return {
                ...state,
                currentItem: action.payload,
            };
        default:
            return state;
    }
};

export default shopReducer;