import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './table.component';
import { MatTableModule } from '@angular/material';
import { DataFetchService } from '../data-fetch.service';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatTableModule, HttpClientModule],
      declarations: [TableComponent]
      // providers: [{ provide: DataFetchService, useClass: DataFetchServiceStub }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create TableComponent', () => {
    expect(component).toBeTruthy();
  });

  // it('should have "user_list" populated ', () => {
  //   expect(component.values).toBeGreaterThan(0);
  // });
});
