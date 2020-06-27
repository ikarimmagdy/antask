import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewClassesPage } from './view-classes.page';

describe('ViewClassesPage', () => {
  let component: ViewClassesPage;
  let fixture: ComponentFixture<ViewClassesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewClassesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewClassesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
