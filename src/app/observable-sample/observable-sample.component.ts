import { Component } from '@angular/core';
import { Observable, map, retry, take, Subject, BehaviorSubject, ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-observable-sample',
  templateUrl: './observable-sample.component.html',
  styleUrl: './observable-sample.component.css'
})
export class ObservableSampleComponent {

  observableData: Observable<string> | undefined;
  subjectData:Subject<string>| undefined;
  bsubjectData:BehaviorSubject<string>| undefined;
  rsubjectData:ReplaySubject<string>|undefined;

  constructor()
  {
    this.subjectData= new Subject<string>();
    this.bsubjectData= new BehaviorSubject<string>('Test 0');
    this.rsubjectData= new ReplaySubject<string>(2);
  }

  create() {
    //.observableData = new Observable<string>(ob => {
      //.next('test');
    //  ob.next('test2');
      //setInterval(() => {
//ob.next('test' + Math.random());
     // }, 1000);
      //setTimeout(() => {
       // ob.complete();
      //}, 5000)
    //  setTimeout(() => {
      //  ob.error("oops Error occured");
//}, 5000)
   // });

    //this.subjectData?.next('Test 1');
    //this.subjectData?.next('Test 2');

    //this.bsubjectData?.next('Test 1');
    //this.bsubjectData?.next('Test 2');

    this.rsubjectData?.next('Test 1');
    this.rsubjectData?.next('Test 2');
    this.rsubjectData?.next('Test 3');
    this.rsubjectData?.next('Test 4');

  }

  fetch1() {
    let ob = {
      next: (response: any) => {
        console.log('Subscriber 1 Item =' + response);
      },
      error: (err: any) => {
        console.log('Subscriber 1 Error Occured =' + err);
      },
      complete: () => {
        console.log('Subscriber 1 End of Data stream')
      }
    }
  //  this.observableData?.subscribe(ob);
  //this.subjectData?.subscribe(ob);
  //this.bsubjectData?.subscribe(ob);
  this.rsubjectData?.subscribe(ob);
  }

  fetch2() {
   //.observableData?.subscribe({
   //this.subjectData?.subscribe({
    //this.bsubjectData?.subscribe({
      this.rsubjectData?.subscribe({
      next: (response: any) => {
        console.log('Subscriber 2 Item =' + response);
      },
      error: (err: any) => {
        console.log('Subscriber 2 Error Occured =' + err);
      },
      complete: () => {
        console.log('Subscriber 2 End of Data stream')
      }
    })
  }

  operator()
  {
    this.observableData = this.observableData?.pipe(
      map(d=>d.toUpperCase()),
   // take(3),
    retry(3)
    )
  }

}
