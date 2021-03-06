import {Injectable} from '@angular/core';

@Injectable()
export class SessionService {

  _session = {};

  set(key: string, value: any) {
    this._session[key] = value;
  }

  get(key: string) {
    return this._session[key];
  }

  has(key: string) {
    if (this.get(key)) {
      return true;
    }
    return false;
  }

  remove(key: string) {
    this._session[key] = null;
  }

}
