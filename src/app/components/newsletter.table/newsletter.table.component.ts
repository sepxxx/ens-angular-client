import {Component, OnInit} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

import {ChangeDetectorRef} from '@angular/core';

import { Router } from '@angular/router';


import { CommonModule } from '@angular/common';
import { EnsService } from 'src/app/services/ens.service';
import { TaskRequestDto } from 'src/app/dtos/taskDto';
@Component({
  selector: 'newsletter-table',
  templateUrl: './newsletter.table.component.html',
  styleUrls: ['./newsletter.table.component.css'],
  standalone: true,
  imports: [MatTableModule, CommonModule],
  
})

export class NewsletterTableComponent implements OnInit {
  
  detailsMap = new Map();
  displayedColumns: string[] = ['id', 'recipientListName', 'text','creationTime', 'done', 'total'];
  dataSource: any;
  // ELEMENT_DATA: TaskRequestDto[] = [];
  // dataSource = ELEMENT_DATA;


  constructor(private ensService: EnsService, private cdr:ChangeDetectorRef) {}

  
  ngOnInit(): void {
    console.log("INIT")
    this.ensService.getTaskList().subscribe(taskList=>{
      // if(users) {
        // this.ELEMENT_DATA = users;
        // console.log(this.ELEMENT_DATA);
        this.dataSource = new MatTableDataSource<any> (taskList);
        this.cdr.detectChanges();
    // }
      })
    }
  
}
  
  
