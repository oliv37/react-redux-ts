import { Action } from 'redux';

export const ADD_ITEM_TYPE = 'ADD_ITEM';

export class AddItemAction implements Action {
    readonly type = ADD_ITEM_TYPE;
    
    constructor(public payload: string) { }
}

export type Actions = AddItemAction;