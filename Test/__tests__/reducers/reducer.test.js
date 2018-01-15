const expect = require('expect')
import { Map } from 'immutable';
import reducer from '../../src/reducers/starter';
import { ActionCreators } from '../../src/actions';

test('Reducer sending nothing', ()=>{
    const toEqual = Map();
    expect(reducer(Map(), {})).toEqual(toEqual);
})

test('Reducer sending action', ()=>{
    const toEqual = Map({text: 'prueba'});
    expect(reducer(Map(), ActionCreators.start('prueba'))).toEqual(toEqual);
})