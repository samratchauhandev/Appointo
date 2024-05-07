import axios from "axios";
import {
    FETCH_SLOTS_FAILUER,
    FETCH_SLOTS_REQUEST,
    FETCH_SLOTS_SUCCESS
} from "./type";

const startDate = '2024-01-20';
const endDate = '2024-01-30';

const timeslotsurl = `https://app.appointo.me/scripttag/mock_timeslots?start_date=${startDate}&end_date=${endDate}`


export const featchSlotsRequest = () => {

    return {
        type: FETCH_SLOTS_REQUEST
    }
}

export const featchSlotsSuccess = (slots) => {

    return {
        type: FETCH_SLOTS_SUCCESS,
        payload: slots
    }
}

export const featchSlotsFailuer = (error) => {

    return {
        type: FETCH_SLOTS_FAILUER,
        payload: error
    }
}

export const fetchSlots = () =>{
    return (dispatch)=>{
        dispatch(featchSlotsRequest)
        axios.get(timeslotsurl)
        .then(responce => {
            const slots = responce.data
            dispatch(featchSlotsSuccess(slots))
        })
        .catch((err)=>{
            const error = err.message
            dispatch(featchSlotsFailuer(error))
        })
    }
}