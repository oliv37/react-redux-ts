import { createStore, Store } from 'redux';
import { Actions } from './actions';
import rootReducer, { RootState } from './reducers';

const store: Store<RootState, Actions> = createStore(rootReducer);

export default store;

