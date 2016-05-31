import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action){

  switch(action.type){
    case FETCH_WEATHER:
      //return state.push(action.payload.data); NEVER update state directly!!!!
      //return state.concat([action.payload.data]);//ALWAYS return a NEW INSTANCE of state.
      return [ action.payload.data, ...state ]; //...state is like exploding the array
      //concat the old array to the new one!
  }

  return state;
}
