import { reducer } from '../src/reducers/index'
describe('reducer', () => {
  let state = {}
   describe('action type GET_TRACKS', () => {
     const action = {
         type: 'GET_TRACKS',
     }
     
     it('should return the state that is not strictly equal to the original', () => {
         expect(reducer(state, action)).not.toBe(state);
     });   
 })

 describe('action type SET_TRACKS', () => {
  let state = {}
  const action = {
      type: 'SET_TRACKS',
  }

  it('should return the state that is not strictly equal to the original', () => {
      expect(reducer(state, action)).not.toBe(state);
  });
