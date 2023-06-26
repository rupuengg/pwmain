import { Action, ActionCreatorsMapObject } from 'redux';

export interface IActionWithPayload<T, P> extends Action<T> {
  payload: P
};

// export function createAction<T extends string>(type: T): Action<T>;
export function createAction<T extends string, P>(type: T, payload: P): IActionWithPayload<T, P>;
export function createAction<T extends string, P>(type: T, payload: P) {
  return payload === undefined ? { type } : { type, payload };
}

export type ActionsUnion<T extends ActionCreatorsMapObject> = ReturnType<T[keyof T]>;