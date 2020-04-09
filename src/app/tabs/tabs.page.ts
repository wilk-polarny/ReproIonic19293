import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit, OnDestroy {

  constructor() {}
  ngOnInit(): void {
    console.log("TabsPage::ngOnInit");
  }
  ngOnDestroy(): void {
    console.log("TabsPage::ngOnDestroy");
  }

}
