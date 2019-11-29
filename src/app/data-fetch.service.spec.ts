import { TestBed } from '@angular/core/testing';

import { DataFetchService } from './data-fetch.service';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { IVal } from './models/fetchData.model';

describe('DataFetchService', () => {
  let service: DataFetchService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataFetchService]
    });
    service = TestBed.get(DataFetchService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    const service: DataFetchService = TestBed.get(DataFetchService);
    expect(service).toBeTruthy();
  });

  it('should retrive data from API via GET', () => {
    const dummyValues: IVal[] = [
      {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz'
      }
    ];
    service.getData().subscribe(values => {
      expect(values.length).toBe(1);
      expect(values).toEqual(dummyValues);
    });

    const request = httpMock.expectOne(service.ROOT_URL);
    expect(request.request.method).toBe('GET');

    request.flush(dummyValues);
  });
});
