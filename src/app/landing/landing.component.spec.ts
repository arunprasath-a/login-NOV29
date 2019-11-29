import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingComponent } from './landing.component';
import { MatToolbarModule } from '@angular/material';
import { TableComponent } from './../table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { By } from 'protractor';
describe('LandingComponent', () => {
  let component: LandingComponent;
  let fixture: ComponentFixture<LandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatToolbarModule, HttpClientModule],
      declarations: [LandingComponent, TableComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create LandingComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should render title User Details', async () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain('User Details');
  });
});
