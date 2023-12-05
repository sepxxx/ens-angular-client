import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'newsletter-card',
  templateUrl: './main.newsletter.card.component.html',
  styleUrls: ['./main.newsletter.card.component.css'],
  standalone: true,
  imports: [MatCardModule, MatIconModule, RouterModule],
})
export class MainNewsletterCardComponent {

}
