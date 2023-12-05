import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCard, MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';

import {Router, ActivatedRoute} from '@angular/router';
import { first } from 'rxjs';
import { DemoMaterialModule } from 'src/app/modules/demo-material.module';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [DemoMaterialModule,
    ReactiveFormsModule,CommonModule]
  // imports: [MatCard, MatCardModule]
})
export class LoginComponent {
  
  loginForm!: FormGroup;

  // /для использования сервиса нужно его импортнуть в конструкторе
  // activatedRoute чтобы понять откуда пришли
  constructor(private formBuilder: FormBuilder,
     private authService: AuthenticationService,
     private router: Router,
     private route: ActivatedRoute) {

  }


  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    // console.log(this.f);
    if(this.loginForm.invalid) {
      return;
    }

    this.authService.login(this.f['username'].value, this.f['password'].value)
    .pipe(first())
    .subscribe({
      next: () => {
        //надо рассмотреть случай когда нас выкинуло из-за просроченного токена
        
        const returnUrl = '/';
        this.router.navigateByUrl(returnUrl);
        
      },
      error: error=>{
        console.log("Not acessable");
      }
    })

  }


}
