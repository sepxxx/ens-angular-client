
import {Component} from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { MainNewsletterCardComponent } from '../main.newsletter.card/main.newsletter.card.component';

// export interface Tile {
//   color: string;
//   cols: number;
//   rows: number;
//   text: string;
// }

/**
 * @title Dynamic grid-list
 */
@Component({
  selector: 'app-main.page',
  templateUrl: './main.page.component.html',
  styleUrls: ['./main.page.component.css'],
  standalone: true,
  imports: [MatGridListModule, MainNewsletterCardComponent],
})
export class MainPageComponent {

}
