import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-init-page',
  templateUrl: './init-page.page.html',
  styleUrls: ['./init-page.page.scss'],
})
export class InitPagePage implements OnInit, OnDestroy {

  constructor(private router: Router) { }

  ngOnInit() {
    console.log("InitPagePage::ngOnInit");
    this.navigateToTabs();
    //this.splash.hide();
  }

  ngOnDestroy() {
    console.log("InitPagePage::ngOnDestroy");
  }

  public navigateToTabs(): void {
    this.router.navigateByUrl("/onboarding", {replaceUrl: true});
  }

}
