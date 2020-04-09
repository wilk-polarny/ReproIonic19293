import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit, OnDestroy{

  ngOnInit(): void {
    console.log("Tab1Page::ngOnInit");
  }
  ngOnDestroy(): void {
    console.log("Tab1Page::ngOnDestroy");
  }

  constructor() {}

}
