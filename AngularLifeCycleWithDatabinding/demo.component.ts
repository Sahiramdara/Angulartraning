import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit, OnChanges, AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy,DoCheck {
@Input() value:string='Ram';

constructor(){
  console.log("Constructor called");
}
ngOnChanges(changes: SimpleChanges): void {
  console.log('ngOnChanges called');
  console.log(changes);
}
ngOnInit(): void {
  console.log("ngOnInit called");
}
ngDoCheck(){
console.log('ngDoCheck called');
}
ngAfterContentInit(): void {
  console.log('ngaftercontentInit called');
}
ngAfterContentChecked(): void {
  console.log('ngAfterContentChecked called');
}
ngAfterViewInit(): void {
  console.log('ngafterviewInit called');
}
ngAfterViewChecked(): void {
  console.log('ngAfterViewChecked called');
}
ngOnDestroy(): void {
  console.log('ngOnDestroy called');
}
}
