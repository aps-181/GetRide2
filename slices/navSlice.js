import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    origin: null,
    destination: null,
    vehicle: null,
    trip: null
}


export const navSlice = createSlice({
    name: "nav",
    initialState,
    reducers: {
        setOrigin: (state, action) => {
            state.origin = action.payload;
        },
        setDestination: (state, action) => {
            state.destination = action.payload;
        },
        setVehicle: (state, action) => {
            state.vehicle = action.payload
        },
        setTrip: (state, action) => {
            state.trip = action.payload
        }
    }
})


export const { setOrigin, setDestination, setTravelTimeInformation } = navSlice.actions

export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectVehicle = (state) => state.nav.vehicle;
export const selectTrip = (state) => state.nav.trip;


export default navSlice.reducer