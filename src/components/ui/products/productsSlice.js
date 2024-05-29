// A "slice" is a collection of Redux reducer logic and actions for a single component
/*
All of the action creators and action types are generated automatically, and the reducer code is shorter and easier to understand. It's also much more clear what's actually being updated in each case.

Reducers (event listener) must always follow some specific rules:

    They should only calculate the new state value based on the state and action arguments
    They are not allowed to modify the existing state. Instead, they must make immutable updates, by copying the existing state and making changes to the copied values.
    They must not do any asynchronous logic, calculate random values, or cause other "side effects"
*/

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { client } from '../../../api/client'

const initialState = {
    products: [],
    status: 'idle',
    error: null,
}

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const out = await client.get('http://localhost:3333/products/all')
    return out.data
})

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.products = action.payload
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    },
})

export const { } = productsSlice.actions

export default productsSlice.reducer

export const selectAllProducts = (state) => state.products.products

export const price = (p) => p.discont_price ? p.discont_price : p.price

export const altPrice = (p) => p.discont_price == null ? null : '$'+p.price

export const discount = (product) => product.discont_price ? ('-' + ((1 - (product.discont_price / product.price)) * 100).toFixed() + '%') : null

export const searchProducts = (products, from, to, discount, sorting) => {
    return products
        .filter(p => {
            if (discount) {
                return p.discont_price != null
            } else {
                return true
            }
        })
        .filter(p => {
            if (from) {
                return from <= price(p)
            } else {
                return true
            }
        })
        .filter(p => {
            if (to) {
                return to >= price(p)
            } else {
                return true
            }
        })
        .sort((a, b) => {
            switch (sorting) {
                case 'default': return 0;
                case 'newest': return (new Date(a.updatedAt)) - (new Date(b.updatedAt));
                case 'increase': return price(a) - price(b);
                case 'decrease': return price(a) > price(b) ? -1 : 1;
                default: return 0;
            }
        })
}
