import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { EnsService } from 'src/app/services/ens.service'

interface Food {
  value: string;
  viewValue: string;
}

/**
 * @title Basic select
 */
@Component({
  selector: 'select-recipients-list',
  templateUrl: './select.recipients.list.component.html',
  styleUrls: ['./select.recipients.list.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule, CommonModule],
})
export class SelectRecipientsListComponent implements OnInit{

  constructor(private ensService: EnsService) {}
  
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.ensService.getAllRecipientListNames().subscribe(names => this.names = names);
  }

  names: String[] = [
  ];
  @Output() selectedNameChange = new EventEmitter<string>();
  selectedName: string='';

  // ...

  onSelectChange() {
    this.selectedNameChange.emit(this.selectedName);
  }
}


