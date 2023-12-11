import {Component} from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import { SelectRecipientsListComponent } from '../select.recipients.list/select.recipients.list.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { EnsService } from 'src/app/services/ens.service';

/**
 * @title Card with footer
 */
@Component({
  selector: 'app-newsletter.creation.card',
  templateUrl: './newsletter.creation.card.component.html',
  styleUrls: ['./newsletter.creation.card.component.css'],
  standalone: true,
  imports: [MatCardModule, MatDividerModule, MatButtonModule, MatProgressBarModule, SelectRecipientsListComponent, FormsModule, MatFormFieldModule, MatInputModule],
})
export class NewsletterCreationCardComponent {
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  constructor(private ensService: EnsService) {}

  selectedName:String = '';

  //Хорошо ли тут менять каждый раз?
  //Почему бы сразу не забирать последнее значение после нажатя кнопки?
  onSelectedNameChange(selectedName: string) {
    // Обработка выбранного значения
    console.log(selectedName);
    this.selectedName = selectedName;
  }
  
  // onSendButtunClick() {
  //   const taskRequestDto = {"recipientsListName": recipientsListName, "text": this.longText};
  //   this.ensService.getAllRecipientListNames(taskRequestDto).subscribe({
  //     next: (data) => {
  //       // Обработка успешного завершения
  //       console.log(data);
  //     },
  //     error: (err) => {
  //       // Обработка ошибок
  //     }
  //   });
  // }
}

