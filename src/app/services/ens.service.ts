import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { TaskRequestDto, TaskResponseDto } from '../dtos/taskDto';
import {RecipientsListResponseDto } from '../dtos/recipientsListDto';

@Injectable({
  providedIn: 'root'
})
export class EnsService {

  constructor(
    private authenticationService: AuthenticationService, private http: HttpClient
  ) {}

  getAllRecipientListNames(): Observable<string[]> {
    return this.http.get<string[]>(`${environment.apiUrl}/list/recipients`);
  }

  saveTaskAndCreateNotifications(taskRequestDto:TaskRequestDto) {
      // const taskRequestDto = {"recipientsListName": recipientsListName, "text": text};
    return  this.http.post<TaskResponseDto>(`${environment.apiUrl}/task/new`, taskRequestDto);
  }

  uploadContactsCsv(contacts:File, listName: string): Observable<RecipientsListResponseDto>  {
    const formData: FormData = new FormData();
    formData.append('file', contacts);
    formData.append('recipientsListName', listName);
    return this.http.post<RecipientsListResponseDto>(`${environment.apiUrl}/upload`, formData);
  }
}