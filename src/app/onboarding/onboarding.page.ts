import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-onboarding-page',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
})
export class OnboardingPage implements OnInit, OnDestroy {

  constructor(private router: Router) { }

  ngOnInit() {
    console.log("OnboardingPage::ngOnInit");
  }

  ngOnDestroy() {
    console.log("OnboardingPage::ngOnInit");
  }

}
