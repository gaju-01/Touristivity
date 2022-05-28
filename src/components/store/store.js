import {createSlice,configureStore} from "@reduxjs/toolkit";
const ini={login:false,email:"",pass:""};
const slice=createSlice({
    name:"slice",
    initialState:ini,
    reducers:{
        login(state,action){
            state.login=true;
            state.email=action.payload.email;
            state.pswrd=action.payload.pswrd;
        },
        logout(state){
            state.login=false;
        }
    }
});

const searchPlace=createSlice({
    name:"SearchPlace",
    initialState:{data:{}},
    reducers:{
        setData(state,action){
            state.data=action.payload;
        }
    }
});

const store=configureStore({
    reducer:{
        login:slice.reducer,
        engine:searchPlace.reducer
    }
});
export const actions=slice.actions;
export const engine_actions=searchPlace.actions;
export default store;