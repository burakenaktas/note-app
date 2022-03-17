import { createStore } from 'redux';
import themeReducer from './reducers/themeReducer'

const store = createStore(themeReducer);

export default store;