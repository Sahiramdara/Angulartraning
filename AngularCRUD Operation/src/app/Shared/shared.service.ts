import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  sourceValue = new BehaviorSubject("");
  currentValue=this.sourceValue.asObservable();
 
  public changeValue(value:string){
    this.sourceValue.next(value);
  }
}
