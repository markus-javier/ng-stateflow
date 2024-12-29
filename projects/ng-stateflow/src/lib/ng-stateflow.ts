import { computed, signal, Signal } from '@angular/core';

export interface Action {
  type: string;
  payload?: any;
}

export class NgStateflow<T> {
  private state = signal<T>({} as T);
  private reducers = new Map<string, (state: T, payload?: any) => T>();

  constructor(initialState: T) {
    this.state.set(initialState);
  }


  getState(): Signal<T> {
    return this.state.asReadonly();
  }


  select<K>(selector: (state: T) => K): Signal<K> {
    return computed(() => selector(this.state()));
  }


  addReducer(actionType: string, reducer: (state: T, payload?: any) => T) {
    this.reducers.set(actionType, reducer);
  }


  dispatch(action: Action) {
    const reducer = this.reducers.get(action.type);
    if (reducer) {
      this.state.update(state => reducer(state, action.payload));
    }
  }


  setState(newState: Partial<T>) {
    this.state.update(state => ({ ...state, ...newState }));
  }
}
