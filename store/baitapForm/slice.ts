import { createSlice } from '@reduxjs/toolkit'

interface initialState {
    productList: [] | undefined,
    productEdit: [],
}
const initialState = {
    productList: [],
    productEdit: undefined,
}

const baiTapFormSlice = createSlice({
    name: 'baiTapForm',
    initialState,

    reducers: {
        addProduct: (state, { payload }) => {
            state.productList.push(payload)
        },

        deleteProduct: (state, { payload }) => {
            state.productList = state.productList.filter((prd) => prd.id !== payload)
        },

        editProduct: (state, { payload }) => {
            state.productEdit = payload
        },

        updateProduct: (state, { payload }) => {
            state.productList = state.productList.map((prd) => {
                if (prd.id === payload.id) {
                    return payload
                }
                return prd
            })

            state.productEdit = undefined
        },
    },
    extraReducers: () => {},
})

export const {addProduct, editProduct, deleteProduct,updateProduct} = baiTapFormSlice.actions
export default baiTapFormSlice.reducer

