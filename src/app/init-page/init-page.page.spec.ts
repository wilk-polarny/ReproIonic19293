import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InitPagePage } from './init-page.page';

describe('InitPagePage', () => {
  let component: InitPagePage;
  let fixture: ComponentFixture<InitPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InitPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
