import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import memberDetailReducer from './reducer.memberDetail';

const rootReducer = combineReducers({
  form: reduxFormReducer,
  memberDetail: memberDetailReducer
});

export default rootReducer;
