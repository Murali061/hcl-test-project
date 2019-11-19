import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import {AppComponent} from '../app.component';
import {CUSTOM_ELEMENTS_SCHEMA, DebugElement} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {AppService} from '../services/app.service';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let debugElement: DebugElement;
  let mockAppService;
  beforeEach(async(() => {
    mockAppService = jasmine.createSpyObj('AppService', ['getLatitudeAndLongitudes']);
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
      ],
      declarations: [ DashboardComponent ],
      providers: [
        {
          provide: AppService, useValue: mockAppService
        }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the onSubmit method when the user clicks on search', () => {
    const spyOnOnsubmit = spyOn(component, 'onSubmit');
    fixture.detectChanges();
    const onSubmitBtn = debugElement.nativeElement.querySelector('.search');
    onSubmitBtn.click();
    expect(spyOnOnsubmit).toHaveBeenCalledTimes(1);
  });
});
