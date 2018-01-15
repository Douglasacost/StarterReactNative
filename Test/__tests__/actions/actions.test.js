const expect = require('expect')
import {ActionCreators} from '../../src/actions';

test('Actions', ()=>{
    expect(ActionCreators.start('prueba')).toEqual({type: 'START', payload: 'prueba'});
})