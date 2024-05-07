import React from 'react'
import {
    FETCH_SLOTS_FAILUER,
    FETCH_SLOTS_REQUEST,
    FETCH_SLOTS_SUCCESS
} from "./type";

const initialState = {
    loading: false,
    slots: [],
    error: ''
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_SLOTS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_SLOTS_SUCCESS:
            return {
                ...state,
                slots: action.payload,
                loading: false,
            }

        case FETCH_SLOTS_FAILUER:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}

export default reducer

