import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'contacts-card',
  templateUrl: './main.contacts.card.component.html',
  styleUrls: ['./main.contacts.card.component.css'],
  standalone: true,
  imports: [MatCardModule, MatIconModule, RouterModule],
})
export class MainContactsCardComponent {

}
