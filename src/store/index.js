import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import catalogReducer from '../store/reducers/catalogReducer';

const rootReducer = combineReducers({
  catalog: catalogReducer
});

const enhancer = composeWithDevTools(applyMiddleware(thunk));

export const configureStore = () => createStore(rootReducer, enhancer);
