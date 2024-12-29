import { Injectable } from '@angular/core';
import {NgStateflow} from './ng-stateflow';

@Injectable({
  providedIn: 'root'
})
export class NgStateflowService {
  createStore<T>(initialState: T): NgStateflow<T> {
    return new NgStateflow<T>(initialState);
  }
}
