import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    signupData : {
        email : '',
        password : '',
        username : ''
    },
    loginData : {
        email : '',
        password : ''
    },
    productInputs : {
        img : '',
        option : '',
        name : '',
        rating : '',
        price : '',
    },
    categoryInputs : {
        img : '',
        name : ''
    },
    prodArr : [],
    changePassword : {
        old : '',
        new : ''
    },
    countCart : 0,
    countWish : 0,
    cartItems : [],
    wishItems : []
}

const appSlice = createSlice({
    name : 'Shofy',
    initialState,
    reducers : {
        updateSignupData : (state, action) => {
            state.signupData = {...state.signupData, ...action.payload}
        },
        emptySignupData : (state, action) => {
            state.signupData = {
                email : '',
                password : '',
                username : '',
            }
        },
        updateLoginData : (state, action) => {
            state.loginData = {...state.loginData, ...action.payload}
        },
        emptyLogin : (state, action) => {
            state.loginData = {
                email : '',
                password : ''
            }
        },
        updateProductInputs : (state, action) => {

            state.productInputs = {...state.productInputs, ...action.payload}
        },
        updateCategoryInputs : (state, action) => {
            state.categoryInputs = {...state.categoryInputs, ...action.payload}
        },
        updateProdArr : (state, action) => {

            const { img, option, name, rating, price } = state.productInputs;
    
            // Check if any input is empty
            if (!img || !option || !name || !rating || !price) {
                alert("All fields must be filled before adding the product.");
                return; // Prevent adding the product if any field is empty
            }

            state.prodArr.push({...state.productInputs})
            state.productInputs = {
                img : '',
                option : '',
                name : '',
                rating : '',
                price : '',
            }
        },
       updateChangePassword : (state, action) => {
        state.changePassword = {...state.changePassword, ...action.payload}
       },
       emptyChangePassword : (state, action) => {
        state.changePassword = {
            old : '',
            new : ''
        }
       },
       updateCartItems : (state, action) => {
        let isPresent = state.cartItems.find((item) => item._id === action.payload._id)
        if(isPresent) {
            isPresent.quantity += 1
        }else{
            state.cartItems.push({...action.payload, quantity: 1})
        }
       },
       updateIncrement : (state, action) => {
        state.cartItems.map((item, idx) => {
            return (
                idx === action.payload ? item.quantity += 1 : item
            )
        })
       },
       updateDecrement : (state, action) => {
        state.cartItems.map((item, idx) => {
            if(item.quantity === 1) {
                return item.quantity = 1
            }else{
                return (
                    idx === action.payload ? item.quantity -= 1 : item
                )
            }
        })
       },
       updateRemove : (state, action) => {
        console.log(action.payload);
        
        state.cartItems = state.cartItems.filter((item, idx) =>{ 
            return item._id !== action.payload
        })
       },
       updateWishItems : (state, action) => {
        
            state.wishItems.push({ ...action.payload, quantity: 1 });
            
       }, 
       updateWishRemove : (state, action) => {
        state.wishItems = state.wishItems.filter((item) => item._id !== action.payload)
       }
    }
})

export const {updateSignupData, emptySignupData, updateLoginData, emptyLogin, updateProductInputs, updateProdArr, updateChangePassword, emptyChangePassword, updateCountCart, updateCountWish, updateCartItems, updateIncrement, updateDecrement, updateRemove, updateWishItems, updateWishRemove, updateCategoryInputs } = appSlice.actions
export default appSlice.reducer