import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserService } from './api/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  searchNameService = inject(UserService);

  ngOnInit(): void {
    this.searchNameService.getUsers().subscribe({
      next: (users) => {
        console.log(users);
      },
      error: (err) => {
        if (err.status === 0) {
          console.error('Service is offline');
        } else {
          console.error('An error occurred:', err);
        }
      }
    });
  }

  title = 'nest-client';
}