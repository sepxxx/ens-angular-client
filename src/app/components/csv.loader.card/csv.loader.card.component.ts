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
//C:\Users\mihar\Desktop\ens-client\src\app\components\csv.loader.card\csv.loader.card.component.html
@Component({
  selector: 'csv-loader-card',
  templateUrl: './csv.loader.card.component.html',
  styleUrls: ['./csv.loader.card.component.css'],
  standalone: true,
  imports: [MatCardModule, MatDividerModule, MatButtonModule, MatProgressBarModule, SelectRecipientsListComponent, FormsModule, MatFormFieldModule, MatInputModule],
})
export class CsvLoaderCardComponent {

  constructor(private ensService: EnsService, private snackBar: MatSnackBar) {}

  selectedFile: File | null = null;
  selectedListName: string | null = null;

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] as File;
  }

  onSendButtonClick() {
    console.log(this.selectedListName);
    console.log(this.selectedFile?.name)
    if(this.selectedFile && this.selectedListName)
      this.ensService.uploadContactsCsv(this.selectedFile, this.selectedListName)
      .subscribe(
        {
          next: (data) => { this.showSuccessSnackbar(`Список ${data.name} с id ${data.id} величиной ${data.total} был успешно загружен`);},
          error: (error) => { this.showErrorSnackbar('Ошибка при загрузке контактов');}
        }
      );
    else
      this.showWarningSnackbar('Выберите файл и введите название списка');
  }

  private showSuccessSnackbar(message: string): void {
    this.snackBar.open(message, 'Закрыть', { duration: 3000, panelClass: 'success-snackbar',   verticalPosition: 'top', // Позиция по вертикали
    horizontalPosition: 'center'});
  }
  
  private showErrorSnackbar(message: string): void {
    this.snackBar.open(message, 'Закрыть', { duration: 5000, panelClass: 'error-snackbar',  verticalPosition: 'top', horizontalPosition: 'center' });
  }
  
  private showWarningSnackbar(message: string): void {
    this.snackBar.open(message, 'Закрыть', { duration: 5000, panelClass: 'warning-snackbar',  verticalPosition: 'top', horizontalPosition: 'center' });
  }

}

