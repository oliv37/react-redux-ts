import { Reducer } from 'redux';
import { Actions, ADD_ITEM_TYPE } from './actions';

export interface RootState {
    items: Array<string>;
}

const initialState: RootState = {
    items: []
};

const rootReducer: Reducer = (state = initialState, action: Actions): RootState => {
    switch(action.type) {
        case ADD_ITEM_TYPE: 
            return {
                ...state,
                items: [...state.items, action.payload]
            };
        default :
            return state;
    }
}

export default rootReducer;