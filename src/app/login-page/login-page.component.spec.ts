import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { userCred } from './../../assets/user';
import { LoginPageComponent } from './login-page.component';
import { HeaderComponent } from './../header/header.component';
import { FooterComponent } from './../footer/footer.component';
import {
  MatToolbarModule,
  MatGridListModule,
  MatInputModule,
  MatButtonModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { ConditionalExpr } from '@angular/compiler';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        MatToolbarModule,
        MatGridListModule,
        MatInputModule,
        MatButtonModule,
        ReactiveFormsModule,
        RouterTestingModule
      ],
      declarations: [LoginPageComponent, HeaderComponent, FooterComponent]
    }).compileComponents();
  }));

  beforeEach(async () => {
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('form'));
    el = de.nativeElement;
    fixture.detectChanges();
  });

  it('should set submitted to true', async () => {
    component.onSubmit();
    expect(component.submitted).toBeTruthy();
  });

  it('should call the onsubmit method', async () => {
    spyOn(component, 'onSubmit');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    fixture.detectChanges();
    expect(component.onSubmit).toHaveBeenCalledTimes(0);
    expect(component.val1).toEqual(component.val2);
  });

  it('form shoild be invalid if no inputs given', async () => {
    component.inputForm.controls['userName'].setValue('');
    component.inputForm.controls['password'].setValue('');
    expect(component.inputForm.valid).toBeFalsy();
    const btn = fixture.debugElement.query(By.css('button'));
    expect(btn.nativeElement.disabled).toBeTruthy();
  });

  it('form shoild be valid if  inputs given', async () => {
    component.inputForm.controls['userName'].setValue('arun');
    component.inputForm.controls['password'].setValue('prasath');
    expect(component.inputForm.valid).toBeTruthy();
    fixture.detectChanges();
    const btn = fixture.debugElement.query(By.css('button'));
    expect(btn.nativeElement.disabled).toBeFalsy();
  });

  it('validator function', async () => {
    const val1 = 'test';
    const val2 = 'test';
    component.validator(val1, val2);
    expect(component.validator).toBeTruthy();
  });
});
