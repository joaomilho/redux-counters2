import { request, asyncAction } from './helpers/async';

let inc = asyncAction((dispatch) => {
  dispatch({type: 'INC'});
  request('post', '/inc');
})

let dec = asyncAction((dispatch) => {
  dispatch({type: 'DEC'});
  request('post', '/dec');
})

export default {
  inc: inc,
  dec: dec
}
