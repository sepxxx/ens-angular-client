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
import { TaskRequestDto } from 'src/app/dtos/taskDto';
import { MatSnackBar } from '@angular/material/snack-bar';
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

  constructor(private ensService: EnsService, private snackBar: MatSnackBar) {}

  selectedName:String = '';
  textareaValue: string = '';

  //Хорошо ли тут менять каждый раз?
  //Почему бы сразу не забирать последнее значение после нажатя кнопки?
  onSelectedNameChange(selectedName: string) {
    // Обработка выбранного значения
    console.log(selectedName);
    this.selectedName = selectedName;

  }
  
  onSendButtonClick() {
    const taskRequestDto:TaskRequestDto = {recipientsListName: this.selectedName, text: this.textareaValue};
    console.log(taskRequestDto);
    this.ensService.saveTaskAndCreateNotifications(taskRequestDto).subscribe({
      next: (data) => {
        // Обработка успешного завершения
        console.log(data);
        
        this.snackBar.open(`Рассылка с id ${data.id} по списку ${data.recipientListName} успешно начата`, 'Закрыть', {
          duration: 3000, // Длительность отображения в миллисекундах
          verticalPosition: 'top', // Позиция по вертикали
          horizontalPosition: 'center' // Позиция по горизонтали
        });
      },
      error: (err) => {
        // Обработка ошибок
      }
    });
  }

}

