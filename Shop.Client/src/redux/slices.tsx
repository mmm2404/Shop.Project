import { ProductState, ListState, ISimilar, IProduct } from "./types";
import { createSlice } from "@reduxjs/toolkit";


export const emptyProduct: IProduct = {
    id: "",
    title: "",
    description: "",
    price: 0,
    thumbnail: {
        id: "",
        productId: "",
        main: true,
        url: "",
    },
    comments: [{
        id: "",
        name: "",
        email: "",
        body: "",
        productId: ""
    }],

    images: [{
        id: "",
        productId: "",
        main: true,
        url: "",
    }]
};
export const emptySimilar: ISimilar = {
    id: "",
    title: "",
    price: 0,
};


const sortIntialState: ListState = {
    loading: false,
    filter: { title: '', priceFrom: 0, priceTo: 0, },
    products:[]        
}

const queryIntialState: ProductState = {    
    loading: false,
    product:{id:"",title:"", description:"", price:0, comments:[], images:[]},
    comments:[]  
 }




export const listSlices = createSlice({
    name: 'list',
    initialState: sortIntialState,
    reducers: {        
        setFilter:(state, action) => {
                 state.filter = action.payload;
             },
        setProducts:(state, action) => {
                state.products = action.payload;
            },   
        showLoadingList: (state, action) => {
                state.loading = action.payload;
            },      
    },
})

export const productSlices = createSlice({
    name: 'product',
    initialState: queryIntialState,
    reducers: {       
        showLoadingProduct: (state, action) => {
            state.loading = action.payload;
        },

        setProduct:(state, action) => {
            state.product = action.payload;
        },
        setComments:(state, action) => {
            state.comments = action.payload;
        },
    //         setSimilars:(state, action) => {
    //        state.similars = action.payload;
    //    },   


    }

})

export const  { setProducts, showLoadingList }= listSlices.actions
export const {setComments, setProduct, showLoadingProduct} = productSlices.actions