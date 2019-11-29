import { Component, OnInit } from '@angular/core';
import { DataFetchService } from './../data-fetch.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  constructor(private dataFetch: DataFetchService) {}
  public values = [];
  ngOnInit() {
    this.dataFetch.getData().subscribe(data => {
      this.values = data;
    });
  }
}
