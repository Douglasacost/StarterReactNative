import { Map } from 'immutable';
import * as types from '../actions/types';

export default function(state = Map({ text: 'Original text' }), action){
    switch (action.type) {
        case types.START:
            return state.set('text', action.payload);   
        default:
            return state;
    }
};