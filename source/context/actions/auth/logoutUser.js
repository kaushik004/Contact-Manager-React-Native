import {LOGOUT_USER} from '../../../constants/actionTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default () => dispatch => {
  // console.log('res.data:>>', res.data);
  AsyncStorage.removeItem('token');
  AsyncStorage.removeItem('user');
  dispatch({
    type: LOGOUT_USER,
  });
};
