import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  addItem(key : string,authToken: string)  {
    localStorage.setItem(key,authToken);
  }

  fetchItem(key : string) : string  {
    if(localStorage.getItem(key) !== null)  {
      return localStorage.getItem(key) as string;
    }
    return '';
  }

  removeItem(key : string) {
    localStorage.removeItem(key);
  }

  clearLocalStorage() {
    localStorage.clear();
  }  
}
