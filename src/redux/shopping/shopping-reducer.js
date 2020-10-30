import * as actionTypes from './shopping-types';

import item1 from '../../images/products/item1.png';
import item2 from '../../images/products/item2.png';
import item3 from '../../images/products/item3.png';
import item4 from '../../images/products/item4.png';
import item5 from '../../images/products/item5.png';
import item6 from '../../images/products/item6.png';

// Item 1
import big_black from '../../images/product-details/item1/big-black.jpg';
import big_orange from '../../images/product-details/item1/big-orange.jpg';
import big_purple from '../../images/product-details/item1/big-purple.jpg';
import big_red from '../../images/product-details/item1/big-red.png';

import small_black1 from '../../images/product-details/item1/small1-black.jpg';
import small_orange1 from '../../images/product-details/item1/small1-orange.jpg';
import small_purple1 from '../../images/product-details/item1/small1-purple.jpg';
import small_red1 from '../../images/product-details/item1/small1-red.png';

import small_black2 from '../../images/product-details/item1/small2-black.jpg';
import small_orange2 from '../../images/product-details/item1/small2-orange.jpg';
import small_purple2 from '../../images/product-details/item1/small2-purple.jpg';
import small_red2 from '../../images/product-details/item1/small2-red.png';

// Items 2 - 6
import big_2 from '../../images/product-details/item2/big_red.png';
import big_3 from '../../images/product-details/item3/big_red.png';
import big_4 from '../../images/product-details/item4/big_red.png';
import big_5 from '../../images/product-details/item5/big_red.png';
import big_6 from '../../images/product-details/item6/big_red.png';



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
            color: "strawberry",
            size: "small",
            img: item1,
            img_big_black: big_black,
            img_big_orange: big_orange,
            img_big_purple: big_purple,
            img_big_red: big_red,
            img_small1_black: small_black1,
            img_small1_orange: small_orange1,
            img_small1_purple: small_purple1,
            img_small1_red: small_red1,
            img_small2_black: small_black2,
            img_small2_orange: small_orange2,
            img_small2_purple: small_purple2,
            img_small2_red: small_red2,
            stars: 5,
            numReviews: 230,
        },
        {
            id: 2,
            title: "Jojo Harness",
            desc: "A durable nylon harness to keep your dog close and easy to identify",
            detail1: "Price includes personalization; add pet's name and phone number for quick identification",
            detail2: "Depending on size, harness accommodates 24 to 28 characters, including spaces",
            detail3: "Girth size is measustrawberry around the full chest of the dog, just behind its front legs",
            detail4: "Choose from multiple colors",
            price: 44.99,
            color: "strawberry",
            size: "medium",
            img: item2,
            img_big_black: big_black,
            img_big_orange: big_orange,
            img_big_purple: big_purple,
            img_big_red: big_2,
            img_small1_black: small_black1,
            img_small1_orange: small_orange1,
            img_small1_purple: small_purple1,
            img_small1_red: small_red1,
            img_small2_black: small_black2,
            img_small2_orange: small_orange2,
            img_small2_purple: small_purple2,
            img_small2_red: small_red2,
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
            color: "strawberry",
            size: "large",
            img: item3,
            img_big_black: big_black,
            img_big_orange: big_orange,
            img_big_purple: big_purple,
            img_big_red: big_3,
            img_small1_black: small_black1,
            img_small1_orange: small_orange1,
            img_small1_purple: small_purple1,
            img_small1_red: small_red1,
            img_small2_black: small_black2,
            img_small2_orange: small_orange2,
            img_small2_purple: small_purple2,
            img_small2_red: small_red2,
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
            color: "strawberry",
            size: "small",
            img: item4,
            img_big_black: big_black,
            img_big_orange: big_orange,
            img_big_purple: big_purple,
            img_big_red: big_4,
            img_small1_black: small_black1,
            img_small1_orange: small_orange1,
            img_small1_purple: small_purple1,
            img_small1_red: small_red1,
            img_small2_black: small_black2,
            img_small2_orange: small_orange2,
            img_small2_purple: small_purple2,
            img_small2_red: small_red2,
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
            color: "strawberry",
            size: "small",
            img: item5,
            img_big_black: big_black,
            img_big_orange: big_orange,
            img_big_purple: big_purple,
            img_big_red: big_5,
            img_small1_black: small_black1,
            img_small1_orange: small_orange1,
            img_small1_purple: small_purple1,
            img_small1_red: small_red1,
            img_small2_black: small_black2,
            img_small2_orange: small_orange2,
            img_small2_purple: small_purple2,
            img_small2_red: small_red2,
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
            color: "strawberry",
            size: "medium",
            img: item6,
            img_big_black: big_black,
            img_big_orange: big_orange,
            img_big_purple: big_purple,
            img_big_red: big_6,
            img_small1_black: small_black1,
            img_small1_orange: small_orange1,
            img_small1_purple: small_purple1,
            img_small1_red: small_red1,
            img_small2_black: small_black2,
            img_small2_orange: small_orange2,
            img_small2_purple: small_purple2,
            img_small2_red: small_red2,
            stars: 5,
            numReviews: 135,
        },

    ],
    // {id, title, desc, details, price, color img, stars, numReviews, qty}
    cart: [],
    currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
    console.log(state);
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            // Get items data from products array
            // Check if item is in cart
            const item = state.products.find(prod => prod.id === action.payload.id);
            const inCart = state.cart.find(item => item.id === action.payload.id ? true : false);
            return {
                // spread the state
                ...state,
                // if is in the cart, map through
                cart: inCart
                    ? state.cart.map(item =>
                        item.id === action.payload.id
                            ? { ...item, qty: item.qty + 1, color: state.currentItem.color, size: state.currentItem.size }
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
        case actionTypes.CHANGE_ITEM_COLOR:
                return {
                    ...state,
                    
                    // cart: state.cart.map(item => item.id === action.payload.id ? { ...item, color: action.payload.color } : item),
                    currentItem: state.currentItem.id === action.payload.id ? { ...state.currentItem, color: action.payload.color } : item

                };
        case actionTypes.CHANGE_ITEM_SIZE:
                return {
                    ...state,
                    currentItem: state.currentItem.id === action.payload.id ? { ...state.currentItem, size: action.payload.size } : item

                    // currentItem: currentItem.id === action.payload.id ? { ...item, color: action.payload.size } : item

                }
        default:
            return state;
    }
};

export default shopReducer;